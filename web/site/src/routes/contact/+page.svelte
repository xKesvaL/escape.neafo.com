<script lang="ts">
 import IconBrandFacebook from '$lib/components/icons/IconBrandFacebook.svelte';
 import IconBrandInstagram from '$lib/components/icons/IconBrandInstagram.svelte';
 import IconPhone from '$lib/components/icons/IconPhone.svelte';
 import IconMail from '$lib/components/icons/IconMail.svelte';
 import IconSend from '$lib/components/icons/IconSend.svelte';
 import {Button, Control, Field, FieldErrors, Label} from "$lib/components/ui/form";
 import {Input} from "$lib/components/ui/input";
 import {superForm} from "sveltekit-superforms";
 import {zodClient} from "sveltekit-superforms/adapters";
 import {contactZodSchema} from "@repo/schemas/zod";
 import * as m from "$paraglide/messages";
 import {Textarea} from "$lib/components/ui/textarea";

 export let data;

 const form = superForm(data.form, {
     validators: zodClient(contactZodSchema),
 });

 const { form: formData, enhance } = form;
</script>

<div class="relative container mx-24 my-24 w-full flex flex-row">
    <div class="absolute min-w-72 min-h-72 rounded-full opacity-5 bg-primary filter blur-3xl left-1/3">

    </div>
    <div class="flex w-full flex-col gap-8">
        <div class="flex flex-col">
            <h1 class="text-6xl font-bold">Let's <span class="text-primary">talk</span></h1>
            <p class="text-2xl">Ask us anything or just say hi,</p>
        </div>
        <div class="flex flex-col gap-4">
            <div class="flex flex-row items-center gap-4">
                <IconBrandFacebook />
                <p class="text-xl">Facebook</p>
            </div>
            <div class="flex flex-row items-center gap-4">
                <IconBrandInstagram />
                <p class="text-xl">Instagram</p>
            </div>
            <div class="flex flex-row items-center gap-4">
                <div class="rounded bg-primary">
                    <IconPhone/>
                </div>
                <p class="text-xl">07668 996660</p>
            </div>
            <div class="flex flex-row items-center gap-4">
                <div class="rounded bg-primary">
                    <IconMail/>
                </div>
                <p class="text-xl">booking@we-escape.de</p>
            </div>
        </div>
    </div>
    <section class="container w-full">
        <form class="flex flex-col gap-6" method="POST" use:enhance>
            <div class="flex flex-row w-full gap-4">
                <div class="w-full">
                    <Field {form} name="name">
                        <Control let:attrs>
                            <Label>{m.name()}</Label>
                            <Input {...attrs} bind:value={$formData.name} placeholder="Name"/>
                        </Control>
                        <FieldErrors/>
                    </Field>
                </div>
                <div class="w-full">
                    <Field {form} name="email">
                        <Control let:attrs>
                            <Label>Email</Label>
                            <Input {...attrs} bind:value={$formData.email} placeholder="Email"/>
                        </Control>
                        <FieldErrors/>
                    </Field>
                </div>
            </div>
            <div>
                <Field {form} name="message">
                    <Control let:attrs>
                        <Label>{m.contact_message()}</Label>
                        <Textarea {...attrs} bind:value={$formData.message} placeholder="Type your message here"/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <p class="text-muted-foreground text-sm">Your message will be copied to support team.</p>
            </div>
            <div class="grid w-full justify-items-end items-end ml-auto">
                <Button class="flex flex-row gap-2">Send your message  <IconSend/></Button>
            </div>
        </form>
    </section>
</div>