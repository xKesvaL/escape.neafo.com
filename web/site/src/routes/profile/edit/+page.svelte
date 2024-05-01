<script lang="ts">
import {
	Button,
	Control,
	Field,
	FieldErrors,
	Label,
} from "$lib/components/ui/form";
import { Input } from "$lib/components/ui/input";
import { userEditZodSchema, userPasswordZodSchema } from "@repo/schemas/zod";
import { superForm } from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";
import * as m from '$paraglide/messages';
import Form from "$lib/components/base/Form.svelte";
import type {PageServerData} from "./$types";

export let data: PageServerData;

const user = data.user;

const form = superForm(data.form, {
	validators: zodClient(userEditZodSchema),
});

const passwordForm = superForm(data.passwordForm, {
    validators: zodClient(userPasswordZodSchema)
});

const { form: formData, enhance } = form;
const { form: passwordFormData, enhance: passwordEnhance } = passwordForm;
</script>

<section class="container flex flex-col gap-4">
        <Form {enhance} {formData} method="POST" class="flex flex-col" action="/profile/edit?/profile">
            <div class="flex flex-col md:flex-row gap-4">
                <Field {form} name="email" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.email()}</Label>
                        <Input {...attrs} bind:value={$formData.email}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} name="firstname" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.firstname()}</Label>
                        <Input {...attrs} bind:value={$formData.firstname}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} name="lastname" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.lastname()}</Label>
                        <Input {...attrs} bind:value={$formData.lastname}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} name="age" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.age()}</Label>
                        <Input {...attrs} bind:value={$formData.age}/>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Button class="ml-auto">{m.apply_changes()}</Button>
        </Form>
        <Form enhance={passwordEnhance} formData={passwordFormData} method="POST" class="flex flex-col" action="/profile/edit?/password">
            <div class="flex flex-col md:flex-row gap-4">
                <Field form={passwordForm} name="current_password" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.current_password()}</Label>
                        <Input {...attrs} bind:value={$passwordFormData.current_password}  />
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field form={passwordForm} name="new_password" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.new_password()}</Label>
                        <Input {...attrs} bind:value={$passwordFormData.new_password}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field form={passwordForm} name="new_password_confirm" class="flex-1">
                    <Control let:attrs>
                        <Label>{m.confirm_new_password()}</Label>
                        <Input {...attrs} bind:value={$passwordFormData.new_password_confirm}/>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Button class="ml-auto">{m.change_password()}</Button>
        </Form>
</section>
