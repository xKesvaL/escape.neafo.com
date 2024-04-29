<script lang="ts">
    import IconBrandFacebook from '$lib/components/icons/IconBrandFacebook.svelte';
    import IconBrandInstagram from '$lib/components/icons/IconBrandInstagram.svelte';
    import {IconMail, IconPhone, IconSend} from '@tabler/icons-svelte';
    import {Button, Control, Field, FieldErrors, Label} from "$lib/components/ui/form";
    import {Input} from "$lib/components/ui/input";
    import {superForm} from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {contactZodSchema} from "@repo/schemas/zod";
    import * as m from "$paraglide/messages";
    import {Textarea} from "$lib/components/ui/textarea";
    import Form from "$lib/components/base/Form.svelte";

    export let data;

 const form = superForm(data.form, {
     validators: zodClient(contactZodSchema),
 });

 const { form: formData, enhance } = form;
</script>

<div class="relative container py-24 w-full flex flex-col md:flex-row gap-4">
    <div class="absolute w-72 h-72 rounded-full opacity-5 bg-primary filter blur-3xl left-1/3">

    </div>
    <div class="flex w-full flex-col gap-8">
        <div class="flex flex-col">
            <h1 class="text-6xl font-black">{@html m.lets_talk()}</h1>
            <p class="text-2xl">{@html m.ask_anything()}</p>
        </div>
        <div class="flex flex-col gap-4">
            <div class="flex flex-row items-center gap-4">
                <div class="w-11 h-11">
                    <IconBrandFacebook />
                </div>
                <p class="md:text-xl -ml-1">{m.facebook()}</p>
            </div>
            <div class="flex flex-row items-center gap-4">
                <div class="w-11 h-11">
                    <IconBrandInstagram />
                </div>
                <p class="md:text-xl -ml-1">{m.instagram()}</p>
            </div>
            <div class="flex flex-row items-center gap-4">
                <div class="rounded-lg bg-primary w-10 h-10 flex items-center justify-center">
                    <IconPhone stroke="1.5" />
                </div>
                <p class="md:text-xl">07668 996660</p>
            </div>
            <div class="flex flex-row items-center gap-4 ">
                <div class="rounded-lg bg-primary w-10 h-10 flex items-center justify-center">
                    <IconMail stroke="1.5" />
                </div>
                <p class="md:text-xl">booking@we-escape.de</p>
            </div>
        </div>
    </div>
    <section class="container w-full px-0">
        <Form class="flex flex-col gap-6" method="POST" {enhance} {formData}>
            <div class="flex flex-col md:flex-row w-full gap-4">
                <div class="w-full">
                    <Field {form} name="name">
                        <Control let:attrs>
                            <Label>{m.name()}</Label>
                            <Input {...attrs} bind:value={$formData.name} placeholder={m.name()}/>
                        </Control>
                        <FieldErrors/>
                    </Field>
                </div>
                <div class="w-full">
                    <Field {form} name="email">
                        <Control let:attrs>
                            <Label>{m.email()}</Label>
                            <Input {...attrs} bind:value={$formData.email} placeholder={m.email()}/>
                        </Control>
                        <FieldErrors/>
                    </Field>
                </div>
            </div>
            <div>
                <Field {form} name="message">
                    <Control let:attrs>
                        <Label>{m.contact_message()}</Label>
                        <Textarea {...attrs} bind:value={$formData.message} placeholder={m.type_your_message()}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <p class="text-muted-foreground text-sm">{m.message_support_team()}</p>
            </div>
            <div class="grid w-full justify-items-end items-end ml-auto">
                <Button class="w-full md:w-fit flex flex-row gap-2">{m.send_message()}<IconSend stroke="1.5"/></Button>
            </div>
        </Form>
    </section>
</div>