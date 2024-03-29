import { getDatabaseConnection, Session } from "$lib/server/db";

export const load = async () => {
	const test = await getDatabaseConnection();

	return {};
};
