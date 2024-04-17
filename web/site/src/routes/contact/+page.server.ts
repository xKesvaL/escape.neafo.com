import { superValidate } from "sveltekit-superforms";
import {type Contact, contactZodSchema} from "@repo/schemas/zod";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types.js";
import { getDatabaseConnection } from "$lib/server/db";
import { fail, redirect } from "@sveltejs/kit";
import { route } from "$lib/ROUTES";
import {generateId} from "lucia";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(contactZodSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(contactZodSchema));

        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const {
            name,
            email,
            message,
        } = form.data;

        const contactId = generateId(40);
        const mongoose = await getDatabaseConnection();

        const contactModel = mongoose.model<Contact>("Contact");

        if (await contactModel.exists({ contactId })) {
            return fail(400, {
                form,
                error: "Id already exist",
            });
        }


        const contact = new contactModel({
            _id: contactId,
            name,
            email,
            message,
        });

        await contact.save();

        return redirect(302, route("/"));
    },
};
