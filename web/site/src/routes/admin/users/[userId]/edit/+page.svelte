<script lang="ts">
import {
	Button,
	Control,
	Field,
	FieldErrors,
	Label,
} from "$lib/components/ui/form";
import { Input } from "$lib/components/ui/input";
import { userEditZodSchema } from "@repo/schemas/zod";
import { superForm } from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";
import * as m from "$paraglide/messages";

export let data;

const user = data.user;

const form = superForm(data.form, {
	validators: zodClient(userEditZodSchema),
});

const { form: formData, enhance } = form;
</script>

<section class="container">
    <form method="POST" use:enhance>
        <div class="flex lg:flex-row gap-4">
            <Field {form} name="email" class="flex-1">
                <Control let:attrs>
                    <Label>{m.email()}</Label>
                    <Input {...attrs} bind:value={$formData.email} />
                </Control>
                <FieldErrors/>
            </Field>
            <Field {form} name="firstname" class="flex-1">
                <Control let:attrs>
                    <Label>{m.firstname()}</Label>
                    <Input {...attrs} bind:value={$formData.firstname} />
                </Control>
                <FieldErrors/>
            </Field>
            <Field {form} name="lastname" class="flex-1">
                <Control let:attrs>
                    <Label>{m.lastname()}</Label>
                    <Input {...attrs} bind:value={$formData.lastname} />
                </Control>
                <FieldErrors/>
            </Field>
        </div>
        <div class="flex lg:flex-row gap-4">
            <Field {form} name="role" class="flex-1">
                <Control let:attrs>
                    <Label>{m.role()}</Label>
                    <Input {...attrs} bind:value={$formData.role} />
                </Control>
                <FieldErrors/>
            </Field>
            <Field {form} name="age" class="flex-1">
                <Control let:attrs>
                    <Label>{m.age()}</Label>
                    <Input {...attrs} bind:value={$formData.age} />
                </Control>
                <FieldErrors/>
            </Field>
        </div>
        <Button>Submit</Button>
    </form>
</section>
