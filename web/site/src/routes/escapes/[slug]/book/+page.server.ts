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

	const bookingModel = mongoose.model<Booking>("Booking");
	const booking = await bookingModel
		.findOne({ user_id: locals.user?.id, escape_id: escape._id })
		.lean();

	if (!booking) {
		return redirect(302, route("/escapes"));
	}

	const form = await superValidate(booking, zod(bookingZodSchema));

	const existingBookings = await bookingModel
		.find({ escape_id: escape._id })
		.lean();

	return {
		booking,
		escape,
		form,
		existingBookings,
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(bookingZodSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { escape_id, date, people_number } = form.data;

		const mongoose = await getDatabaseConnection();
		const bookingModel = mongoose.model<Booking>("Model");

		if (await bookingModel.exists({ escape_id, date })) {
			return fail(400, {
				message: "Booking already exists",
			});
		}

		const booking = await bookingModel.create({
			escape_id,
			date,
			people_number,
		});

		await booking.save();
	},
};
