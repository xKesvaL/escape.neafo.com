import { getDatabaseConnection } from "$lib/server/db";
import { type User, userEditZodSchema } from "@repo/schemas/zod";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ params }) => {
	const userId = params.userId;

	const mongoose = await getDatabaseConnection();
	const userModel = mongoose.model<User>("User");

	const user = await userModel.findOne({ _id: userId }).lean().select({
		email: true,
		firstname: true,
		lastname: true,
	});

	return {
		user: user,
		form: await superValidate(user, zod(userEditZodSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(userEditZodSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const userId = event.params.userId;
		const { email, firstname, lastname, age } = form.data;

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");
		const user = await userModel
			.findOne({ _id: userId })
			.select({ email: true })
			.exec();

		if (!user) {
			return fail(400, {
				error: "No user",
			});
		}

		if (await userModel.exists({ email })) {
			return fail(400, {
				form,
				error: "Email already in use",
			});
		}

		user.email = email;
		user.firstname = firstname;
		user.lastname = lastname;
		user.age = age;
		

		await user.save();

		return true;
	},
};
