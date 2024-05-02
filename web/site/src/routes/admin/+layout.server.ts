import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
	const user = locals.user;

	if (!user || user.role !== "admin") {
		return redirect(302, "/");
	}

	return {
		user: user,
	};
};
