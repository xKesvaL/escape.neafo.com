import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import {
	type User,
	userEditZodSchema,
	userPasswordZodSchema,
} from "@repo/schemas/zod";
import { fail, redirect } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = locals;

	if (!user) {
		return redirect(302, route("/auth/login"));
	}

	return {
		user: user,
		form: await superValidate(user, zod(userEditZodSchema)),
		passwordForm: await superValidate(zod(userPasswordZodSchema)),
	};
};

export const actions: Actions = {
	profile: async (event) => {
		const form = await superValidate(event, zod(userEditZodSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const userId = event.locals.user?.id;
		const { email, firstname, lastname, age } = form.data;

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");
		const user = await userModel.findOne({ _id: userId });

		if (!user) {
			return fail(400, {
				error: "No user",
			});
		}

		user.email = email;
		user.firstname = firstname;
		user.lastname = lastname;
		user.age = age;

		await user.save();

		return redirect(302, route("/profile"));
	},
	password: async (event) => {
		const form = await superValidate(event, zod(userPasswordZodSchema));

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const userId = event.locals.user?.id;
		const { current_password, new_password, new_password_confirm } = form.data;

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");
		const user = await userModel.findOne({ _id: userId });

		if (!user) {
			return fail(400, {
				error: "No user",
			});
		}

		const validPassword = await new Argon2id().verify(
			user.hashed_password || "",
			current_password,
		);
		if (!validPassword) {
			return fail(400, {
				message: "Incorrect username or password",
			});
		}

		if (new_password !== new_password_confirm) {
			return fail(400, {
				message: "Passwords do not match",
			});
		}

		user.hashed_password = await new Argon2id().hash(new_password);

		await user.save();

		return redirect(302, route("/profile"));
	},
};
