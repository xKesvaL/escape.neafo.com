import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import { type Booking, type Escape, bookingZodSchema } from "@repo/schemas/zod";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
	const mongoose = await getDatabaseConnection();

	const escapeModel = mongoose.model<Escape>("Escape");
	const escape = await escapeModel
		.findOne({
			slug: params.slug,
		})
		.lean();

	if (!escape) {
		return fail(404, {
			slug: params.slug,
		});
	}

	return {
		escape,
	};
};
