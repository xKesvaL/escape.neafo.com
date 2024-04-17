import type {PageServerLoad} from "./$types";
import {getDatabaseConnection} from "$lib/server/db";
import type {Escape} from "@repo/schemas/zod";
import {redirect} from "@sveltejs/kit";
import {route} from "$lib/ROUTES";


export const load: PageServerLoad = async ({ params }) => {
    const mongoose = await getDatabaseConnection();
    const {slug} = params;
    const escapeModel = mongoose.model<Escape>("Escape");
    const escapes = await escapeModel.deleteOne({slug});
    return redirect(
        302,
        route("/admin/escapes"),
    );
};