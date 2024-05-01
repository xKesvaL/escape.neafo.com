import { route } from "$lib/ROUTES";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = locals;

	if (!user) {
		return redirect(302, route("/auth/login"));
	}

	return {
		user: user,
	};
};
