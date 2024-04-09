import { superValidate } from "sveltekit-superforms";
import {type User, userRegisterZodSchema} from "@repo/schemas/zod";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types.js";
import { lucia } from "$lib/server/auth";
import { getDatabaseConnection } from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import { route } from "$lib/ROUTES";

export const load: PageServerLoad = async () => {
	return { 
		form: await superValidate(zod(userRegisterZodSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(userRegisterZodSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { email, password } = form.data;

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");
		const user = await userModel.findOne({ email }).select({ email: 1, hashed_password: 1 }).exec();

		if (!user) {
			return fail(400, {
				form,
				error: "Incorrect email or password",
			});
		}

		const validPassword = await new Argon2id().verify(user.hashed_password || '', password);
		if (!validPassword) {
			return fail(400, {
				message: "Incorrect username or password"
			});
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});


		return redirect(302, route("/"));
	},
};
