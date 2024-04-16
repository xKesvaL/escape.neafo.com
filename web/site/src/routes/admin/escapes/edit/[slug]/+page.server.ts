import type {PageServerLoad} from "./$types";
import {getDatabaseConnection} from "$lib/server/db";
import {type CustomImage, type Escape, escapeCreateZodSchema} from "@repo/schemas/zod";
import {fail, superValidate} from "sveltekit-superforms";
import {zod} from "sveltekit-superforms/adapters";
import type {Actions} from "../../../../../../.svelte-kit/types/src/routes/admin/escapes/create/$types";
import {generateId} from "lucia";
import {fileToBase64Server} from "@repo/utils";
import {redirect} from "@sveltejs/kit";
import {route} from "$lib/ROUTES";


export const load: PageServerLoad = async ({ params }) => {
    const mongoose = await getDatabaseConnection();
    const {slug} = params;
    const escapeModel = mongoose.model<Escape>("Escape");
    const _escape = await escapeModel.findOne({slug}).lean();
    return {
        _escape,
        form: await superValidate(zod(escapeCreateZodSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(escapeCreateZodSchema), {
            allowFiles: true,
        });

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
            price,
            image: imageFile,
        } = form.data;

        const escapeId = generateId(40);
        const mongoose = await getDatabaseConnection();

        const escapeModel = mongoose.model<Escape>("Escape");

        if (await escapeModel.exists({ slug })) {
            return fail(400, {
                form,
                error: "Name of escape already in use",
            });
        }

        const image = {
            data: await fileToBase64Server(imageFile),
            content_type: imageFile.type,
            id: generateId(8),
        } satisfies CustomImage;

        console.log(image);

        const escapeGame = new escapeModel({
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
            price,
            image,
        });

        await escapeGame.save();

        return redirect(
            302,
            route("/escapes/[slug]", {
                slug,
            }),
        );
    },
};