import { route } from "$lib/ROUTES";
import { spots } from "$lib/config/spots";
import { getDatabaseConnection } from "$lib/server/db";
import { fileToBase64Server } from "@repo/utils";
import { redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
	return {
		slug: params.slug,
	};
};

export const actions: Actions = {
	default: async (request) => {
		const data = await request.request.formData();
		const image = data.get("image");
		const userId = request.cookies.get("user_id");
		const spot = spots.find((spot) => spot.slug === request.params.slug);

		if (!spot) {
			return redirect(302, route("/play/album"));
		}

		const mongoose = await getDatabaseConnection();
		const albumModel = mongoose.model("ImageAlbum");

		const album = new albumModel({
			_id: generateId(40),
			name: spot.name,
			user_id: userId,
			image: await fileToBase64Server(image as File),
		});

		await album.save();
	},
};
