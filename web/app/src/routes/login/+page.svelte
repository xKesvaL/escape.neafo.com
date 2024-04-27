<script lang="ts">
import {
	Button,
	Control,
	Field,
	FieldErrors,
	Label,
} from "$lib/components/ui/form";
import { Input } from "$lib/components/ui/input";
import { Button as NormalButton } from '$lib/components/ui/button';
import { userRegisterZodSchema } from "@repo/schemas/zod";
import { superForm } from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";
import {IconChevronLeft} from "@tabler/icons-svelte";
import {route} from "$lib/ROUTES";

export let data;

const form = superForm(data.form, {
	validators: zodClient(userRegisterZodSchema),
});

const { form: formData, enhance } = form;
</script>

<section class="p-4 flex flex-col gap-2">
    <header class="grid grid-cols-[40px,1fr,40px] items-center">
        <NormalButton size="icon" variant="ghost" href={route('/')}>
            <IconChevronLeft stroke="1.5" />
        </NormalButton>
        <h1 class="text-2xl font-bold text-center">Login</h1>
        <div></div>
    </header>
    <form method="POST" class="p-4 flex flex-col gap-2" use:enhance>
        <Field {form} name="email">
            <Control let:attrs>
                <Label>Email</Label>
                <Input {...attrs} placeholder="Email" class="rounded-full" bind:value={$formData.email}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="password">
            <Control let:attrs>
                <Label>Password</Label>
                <Input {...attrs} placeholder="Password123" class="rounded-full" bind:value={$formData.password}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button class="rounded-full w-full">Continue</Button>
    </form>
<!--  TIME:  remove if not enough time for sso auth -->
    <div class="flex items-center gap-4 px-4">
        <div class="h-[1px] flex-grow bg-muted"></div>
        <div class="text-muted-foreground">OR</div>
        <div class="h-[1px] flex-grow bg-muted"></div>
    </div>
    <div class="p-4 flex gap-4">
        <Button class="rounded-full w-full border" variant="secondary">
            Google
        </Button>
        <Button class="rounded-full w-full border" variant="secondary">Discord</Button>
    </div>
</section>
