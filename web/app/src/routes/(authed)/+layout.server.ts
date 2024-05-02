import { route } from "$lib/ROUTES";
import { ALLOW_GUESTS_APP } from "@repo/global-config";
import { redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ parent, cookies }) => {
	const { user } = await parent();

	if (!user && !ALLOW_GUESTS_APP) {
		redirect(302, route("/"));
	}

	if (!user && ALLOW_GUESTS_APP) {
		const user_id = cookies.get("user_id");

		if (!user_id) {
			cookies.set("user_id", generateId(40), {
				path: "/",
				httpOnly: false,
				sameSite: "lax",
			});
		}

		return {
			user_id: user_id,
		};
	}

	return {
		user_id: user?.id,
	};
};
