import type {PageServerLoad} from "./$types";
import {getDatabaseConnection} from "$lib/server/db";
import {bookingZodSchema, type Escape} from "@repo/schemas/zod";
import {fail} from "@sveltejs/kit";
import {superValidate} from "sveltekit-superforms";
import {zod} from "sveltekit-superforms/adapters";


export const load: PageServerLoad = async ({ params, locals }) => {
    const mongoose = await getDatabaseConnection();
    const {slug} = params;
    const escapeModel = mongoose.model<Escape>("Escape");
    const escape = await escapeModel.findOne({ slug }).lean();

    if (!escape) {
        return fail(404, {
            slug
        })
    }

    return {
        escape,
        user: locals.user,
        form: await superValidate(zod(bookingZodSchema)),
    };
};