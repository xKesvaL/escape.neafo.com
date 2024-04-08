import type {PageServerLoad} from "../../../../.svelte-kit/types/src/routes/auth/login/$types";
import {getDatabaseConnection} from "$lib/server/db";
import type {Escape} from "@repo/schemas/zod";


export const load: PageServerLoad = async () => {
    const mongoose = await getDatabaseConnection();
    const escapeModel = mongoose.model<Escape>("Escape");
    const escapes = await escapeModel.find().lean();
    return {
        escapes
    };
};