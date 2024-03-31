import { superValidate } from "sveltekit-superforms";
import {type User, userRegisterZodSchema} from "@repo/schemas/zod";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types.js";
import { lucia } from "$lib/server/auth";
import { getDatabaseConnection } from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
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

		const userId = generateId(40);
		const hashedPassword = await new Argon2id().hash(password);

		const mongoose = await getDatabaseConnection();

		const userModel = mongoose.model<User>("User");

		if (await userModel.exists({ email })) {
			return fail(400, {
				form,
				error: "Email already in use",
			});
		}

		const user = new userModel({
			_id: userId,
			email,
			hashed_password: hashedPassword,
		});

		await user.save();

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes,
		});

		return redirect(302, route("/"));
	},
};
