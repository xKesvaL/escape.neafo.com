import type {PageServerLoad} from "./$types";
import {getDatabaseConnection} from "$lib/server/db";
import {type Escape, escapeZodSchema} from "@repo/schemas/zod";
import {superValidate} from "sveltekit-superforms";
import {zod} from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({ params }) => {
    const mongoose = await getDatabaseConnection();
    const {slug} = params;
    const escapeModel = mongoose.model<Escape>("Escape");
    const editEscape = await escapeModel.findOne({slug}).lean();

    const form = await superValidate(editEscape, zod(escapeZodSchema));

    return {
        form
    }
};