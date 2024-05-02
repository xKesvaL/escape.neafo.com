import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import {
	type User,
	userAdminEditZodSchema,
	userEditZodSchema,
} from "@repo/schemas/zod";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {
	await parent();
	const userId = params.userId;

	const mongoose = await getDatabaseConnection();
	const userModel = mongoose.model<User>("User");

	const user = await userModel.findOne({ _id: userId }).lean().select({
		email: true,
		firstname: true,
		lastname: true,
		age: true,
		role: true,
	});

	if (!user) {
		return redirect(302, route("/admin/users"));
	}

	return {
		user: user,
		form: await superValidate(user, zod(userAdminEditZodSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(userAdminEditZodSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const userId = event.params.userId;
		const { email, firstname, lastname, role, age } = form.data;

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");
		const user = await userModel
			.findOne({ _id: userId })
			.select({ email: true })
			.exec();

		if (!user) {
			return redirect(302, route("/admin/users"));
		}

		user.email = email;
		user.firstname = firstname;
		user.lastname = lastname;
		user.age = age;
		user.role = role;

		await user.save();

		return redirect(302, route("/admin/users"));
	},
};
