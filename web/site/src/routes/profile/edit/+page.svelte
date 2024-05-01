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
import * as m from '$paraglide/messages';

export let data;

const user = data.user;

const form = superForm(data.form, {
	validators: zodClient(userEditZodSchema),
});

const { form: formData, enhance } = form;
</script>

<section class="container">
    <form method="POST" use:enhance>
        <Field {form} name="email">
            <Control let:attrs>
                <Label>{m.email()}</Label>
                <Input {...attrs} bind:value={$formData.email}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="firstname">
            <Control let:attrs>
                <Label>{m.firstname()}</Label>
                <Input {...attrs} bind:value={$formData.firstname}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="lastname">
            <Control let:attrs>
                <Label>{m.lastname()}</Label>
                <Input {...attrs} bind:value={$formData.lastname}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="current_password">
            <Control let:attrs>
                <Label>{m.current_password()}</Label>
                <Input {...attrs}  />
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="new_password">
            <Control let:attrs>
                <Label>{m.new_password()}</Label>
                <Input {...attrs}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="confirm_new_password">
            <Control let:attrs>
                <Label>{m.confirm_new_password()}</Label>
                <Input {...attrs}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button>{m.apply_changes()}</Button>
    </form>
</section>
