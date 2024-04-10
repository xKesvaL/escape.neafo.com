import type { PageServerLoad } from './$types';
import { getDatabaseConnection } from '$lib/server/db';
import { type User } from '@repo/schemas/zod';

export const load: PageServerLoad = async ({ params }) => {
	const userId = params.userId;

	const mongoose = await getDatabaseConnection();
	const userModel = mongoose.model<User>('User');

	const user = await userModel.findOne({ _id: userId }).lean().select({
		email: true
	});

	return {
		user: user
	};
};
