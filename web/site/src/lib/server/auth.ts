import { dev } from "$app/environment";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import type { User } from "@repo/schemas/zod";
import { Lucia } from "lucia";
import { getDatabaseConnection } from "./db";

const mongoose = await getDatabaseConnection();

const adapter = new MongodbAdapter(
	mongoose.connection.collection("sessions"),
	mongoose.connection.collection("users"),
);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev,
		},
	},
	getUserAttributes: (attributes) => {
		return {
			email: attributes.email,
			firstname: attributes.firstname,
			lastname: attributes.lastname,
			age: attributes.age,
			role: attributes.role,
		};
	},
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: User;
	}
}
