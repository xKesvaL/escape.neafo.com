import { superValidate } from "sveltekit-superforms";
import{type ContactTeambuilding ,contactTeambuildingZodSchema} from "@repo/schemas/zod";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types.js";
import { getDatabaseConnection } from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import { route } from "$lib/ROUTES";
import {generateId} from "lucia";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(contactTeambuildingZodSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(contactTeambuildingZodSchema));

        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const {
            companyName,
            email,
            place,
            message,
        } = form.data;

        const contactId = generateId(40);
        const mongoose = await getDatabaseConnection();

        const contactModel = mongoose.model<ContactTeambuilding>("ContactTeambuilding");

        if (await contactModel.exists({ contactId })) {
            return fail(400, {
                form,
                error: "Id already exist",
            });
        }


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