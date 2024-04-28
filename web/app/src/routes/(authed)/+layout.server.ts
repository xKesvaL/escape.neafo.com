import { route } from "$lib/ROUTES";
import { ALLOW_GUESTS_APP } from "@repo/global-config";
import { redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ parent }) => {
	let { user } = await parent();

	if (!user && !ALLOW_GUESTS_APP) {
		redirect(302, route("/"));
	}

	if (!user && ALLOW_GUESTS_APP) {
		user = {
			email: "guest@localhost",
			id: generateId(40),
		};
	}

	return {
		user,
	};
};
