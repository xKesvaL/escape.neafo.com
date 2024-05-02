import { getDatabaseConnection } from "$lib/server/db";
import type { User } from "@repo/schemas/zod";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
	await parent();
	const mongoose = await getDatabaseConnection();
	const userModel = mongoose.model<User>("User");

	const users = await userModel.find().lean().select({
		email: true,
		firstname: true,
		lastname: true,
		age: true,
		role: true,
	});

	return {
		users: users,
	};
};
