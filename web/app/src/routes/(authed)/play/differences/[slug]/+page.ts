import { route } from "$lib/ROUTES";
import { differences } from "$lib/config/differences";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	const difference = differences.find((diff) => {
		return diff.name === params.slug;
	});

	if (!difference) {
		return redirect(302, route("/play"));
	}

	return {
		difference,
	};
};
