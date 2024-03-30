import { redirect } from "@sveltejs/kit";
import { route } from "$lib/ROUTES";

export const load = ({ params }) => {
	switch (params.path) {
		case "sign-in":
			return redirect(301, route("/auth/login"));
		case "sign-up":
			return redirect(301, route("/auth/register"));
	}
};
