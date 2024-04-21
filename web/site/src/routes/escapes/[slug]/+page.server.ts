import { getDatabaseConnection } from "$lib/server/db";
import { type Booking, type Escape, bookingZodSchema } from "@repo/schemas/zod";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
	const mongoose = await getDatabaseConnection();
	const { slug } = params;
	const escapeModel = mongoose.model<Escape>("Escape");
	const escape = await escapeModel.findOne({ slug }).lean();

	if (!escape) {
		return fail(404, {
			slug,
		});
	}

	const bookingModel = mongoose.model<Booking>("Booking");
	const bookings = await bookingModel.find({ escape_id: escape._id }).lean();

	const form = await superValidate(
		{
			escape_id: escape._id,
		},
		zod(bookingZodSchema),
	);

	return {
		escape,
		bookings,
		user: locals.user,
		form,
	};
};
