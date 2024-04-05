import { getDatabaseConnection } from "$lib/server/db";
import {type User} from "@repo/schemas/zod";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const mongoose = await getDatabaseConnection();
    const userModel = mongoose.model<User>("User");

    const users = await userModel.find().lean().select({ 
        email: true
     });

    console.log(users);

    return {
        users: structuredClone(users)
    };
};



