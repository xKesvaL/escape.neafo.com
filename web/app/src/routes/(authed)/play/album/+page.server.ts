import { getDatabaseConnection } from "$lib/server/db";
import type { ImageAlbum } from "@repo/schemas/zod";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, parent }) => {
	const { user_id } = await parent();
	const mongoose = await getDatabaseConnection();
	const albumModel = mongoose.model<ImageAlbum>("ImageAlbum");

	const albums = await albumModel
		.find({
			user_id,
		})
		.lean();

	return {
		albums,
	};
};
