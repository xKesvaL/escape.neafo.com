import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import { type Booking, type Escape, bookingZodSchema } from "@repo/schemas/zod";
import { fail, redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "./$types";
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

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(bookingZodSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { date, people_number } = form.data;
		const { slug } = event.params;
		const mongoose = await getDatabaseConnection();

		const escapeModel = mongoose.model<Escape>("Escape");
		const { _id: escape_id } = await escapeModel
			.findOne({ slug })
			.select({ _id: true })
			.lean();

		const bookingModel = mongoose.model<Booking>("Booking");

		if (await bookingModel.exists({ escape_id, date })) {
			return fail(400, {
				message: "Booking already exists",
				form,
			});
		}

		const booking = await bookingModel.create({
			_id: generateId(40),
			escape_id,
			user_id: event.locals.user?.id,
			date,
			people_number,
			draft: true,
		});

		await booking.save();

		redirect(301, route("/escapes/[slug]/book", { slug }));
	},
};
