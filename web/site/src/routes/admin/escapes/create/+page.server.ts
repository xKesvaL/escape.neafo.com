import { getDatabaseConnection } from "$lib/server/db";
import { type Escape, escapeCreateZodSchema } from "@repo/schemas/zod";
import { fail } from "@sveltejs/kit";
import { generateId } from "lucia";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type {
	Actions,
	PageServerLoad,
} from "../../../../../.svelte-kit/types/src/routes/auth/register/$types";

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
			images,
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

		console.log(form.data);

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
			images,
		});

		// await escapeGame.save();

		// return redirect(302, route("/escapes/[slug]", {
		//     slug
		// }));
	},
};
