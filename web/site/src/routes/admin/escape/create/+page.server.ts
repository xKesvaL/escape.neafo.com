import type {PageServerLoad} from "../../../../../.svelte-kit/types/src/routes/auth/register/$types";
import {superValidate} from "sveltekit-superforms";
import {zod} from "sveltekit-superforms/adapters";
import {escapeCreateZodSchema} from "@repo/schemas/zod";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(escapeCreateZodSchema)),
    };
};