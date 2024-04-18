import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import {
	type CustomImage,
	type Escape,
	escapeCreateZodSchema,
} from "@repo/schemas/zod";
import { fileToBase64Server } from "@repo/utils";
import { redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(escapeCreateZodSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(escapeCreateZodSchema), {
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

		const escapeId = generateId(40);
		const mongoose = await getDatabaseConnection();

		const escapeModel = mongoose.model<Escape>("Escape");

		if (await escapeModel.exists({ slug })) {
			return fail(400, {
				form,
				error: "Name of escape already in use",
			});
		}

		const image = {
			data: await fileToBase64Server(imageFile),
			content_type: imageFile.type,
			id: generateId(8),
		} satisfies CustomImage;

		const escapeGame = new escapeModel({
			_id: escapeId,
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
			image,
		});

		await escapeGame.save();

		return redirect(
			302,
			route("/escapes/[slug]", {
				slug,
			}),
		);
	},
};
