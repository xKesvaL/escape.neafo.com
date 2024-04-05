import type {Actions, PageServerLoad} from "../../../../../.svelte-kit/types/src/routes/auth/register/$types";
import {superValidate} from "sveltekit-superforms";
import {zod} from "sveltekit-superforms/adapters";
import {escapeCreateZodSchema, type Escape} from "@repo/schemas/zod";
import {fail, redirect} from "@sveltejs/kit";
import {generateId} from "lucia";
import {getDatabaseConnection} from "$lib/server/db";
import {route} from "$lib/ROUTES";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(escapeCreateZodSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(escapeCreateZodSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const {
            name,
            slug,
            description,
            langs,
            difficulty,
            puzzle,
            time,
            address,
            city,
            postal_code,
            price
        } = form.data;

        console.log(form.data)

        const escapeId = generateId(40);

        const mongoose = await getDatabaseConnection();

        const escapeModel = mongoose.model<Escape>("Escape");

        if (await escapeModel.exists({ slug })) {
            return fail(400, {
                form,
                error: "Name of escape already in use",
            });
        }

        const escape = new escapeModel({
            _id: escapeId,
            name,
            slug,
            description,
            langs,
            difficulty,
            puzzle,
            time,
            address,
            city,
            postal_code,
            price
        });

        await escape.save();


        return redirect(302, route("/escapes/[slug]", {
            slug
        }));
    },
};