import { getDatabaseConnection } from "$lib/server/db";

export const load = async () => {
	const test = await getDatabaseConnection();

	console.log(test.connection.models.User);

	return {};
};
