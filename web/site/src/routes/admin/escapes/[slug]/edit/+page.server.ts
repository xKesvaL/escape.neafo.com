import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import {
	type CustomImage,
	type Escape,
	escapeCreateZodSchema,
	escapeEditZodSchema,
} from "@repo/schemas/zod";
import { fileToBase64Server } from "@repo/utils";
import { redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const mongoose = await getDatabaseConnection();
	const { slug } = params;
	const escapeModel = mongoose.model<Escape>("Escape");
	const editEscape = await escapeModel.findOne({ slug }).lean();

	if (!editEscape) {
		return fail(404, {
			error: "Escape not found",
		});
	}

	const form = await superValidate(editEscape, zod(escapeCreateZodSchema));

	return {
		form,
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(escapeEditZodSchema), {
			allowFiles: true,
		});

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const {
			name,
			slug,
			description,
			langs,
			difficulty,
			puzzle,
			time,
			address,
			city,
			postal_code,
			price,
			image: imageFile,
		} = form.data;

		const mongoose = await getDatabaseConnection();
		const escapeModel = mongoose.model<Escape>("Escape");
		const escapeGame = await escapeModel.findOne({ slug }).exec();

		if (!escapeGame) {
			return fail(404, {
				form,
				error: "Escape not found",
			});
		}

		let image;

		if (imageFile instanceof File) {
			image = {
				data: await fileToBase64Server(imageFile),
				content_type: imageFile.type,
				id: generateId(8),
			} satisfies CustomImage;
		} else {
			image = imageFile;
		}

		// @ts-ignore
		const geolocation = (
			await (
				await fetch(
					`https://api-adresse.data.gouv.fr/search/?q=${address.replace(
						" ",
						"+",
					)}&postcode=${postal_code}&limit=1&autocomplete=0`,
				)
			).json()
		).features[0].geometry.coordinates as [number, number];

		const [lng, lat] = geolocation;

		escapeGame.name = name;
		escapeGame.slug = slug;
		escapeGame.description = description;
		escapeGame.langs = langs;
		escapeGame.difficulty = difficulty;
		escapeGame.puzzle = puzzle;
		escapeGame.time = time;
		escapeGame.address = address;
		escapeGame.city = city;
		escapeGame.postal_code = postal_code;
		escapeGame.price = price;
		escapeGame.image = image;
		escapeGame.longitude = lng;
		escapeGame.latitude = lat;

		await escapeGame.save();

		return redirect(302, route("/admin/escapes"));
	},
};
