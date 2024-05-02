import type {PageServerLoad} from "./$types";
import {getDatabaseConnection} from "$lib/server/db";
import type {Escape} from "@repo/schemas/zod";

export const load: PageServerLoad = async ({ params }) => {
    const mongoose = await getDatabaseConnection();
    const {slug} = params;
    const escapeModel = mongoose.model<Escape>("Escape");
    await escapeModel.deleteOne({slug});

    return {}
};