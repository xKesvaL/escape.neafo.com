import { route } from "$lib/ROUTES";
import { getDatabaseConnection } from "$lib/server/db";
import {
	type ContactTeamBuilding,
	contactTeamBuildingZodSchema,
} from "@repo/schemas/zod";
import { fail, redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(contactTeamBuildingZodSchema)),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(contactTeamBuildingZodSchema));

		console.log("salut");

		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { companyName, email, place, message } = form.data;

		const contactId = generateId(40);
		const mongoose = await getDatabaseConnection();

		const contactModel = mongoose.model<ContactTeamBuilding>(
			"ContactTeambuilding",
		);

		const contactTeambuilding = new contactModel({
			_id: contactId,
			companyName,
			email,
			place,
			message,
		});

		await contactTeambuilding.save();

		return redirect(302, route("/"));
	},
};
