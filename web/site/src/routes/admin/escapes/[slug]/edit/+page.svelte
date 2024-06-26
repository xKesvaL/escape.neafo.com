<script lang="ts">
    import {Button, Control, Field, FieldErrors, Fieldset, Label,} from "$lib/components/ui/form";
    import {Input} from "$lib/components/ui/input";
    import {Textarea} from "$lib/components/ui/textarea";
    import {Switch} from "$lib/components/ui/switch";
    import {escapeEditZodSchema} from "@repo/schemas/zod";
    import {superForm} from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {Checkbox} from "$lib/components/ui/checkbox";
    import {availableLanguageTags} from "$paraglide/runtime";
    import {ESCAPE} from "@repo/global-config";
    import replaceSpecialCharacter from "replace-special-characters";
    import type {Locale} from "$lib/config/brand";
    import * as m from "$paraglide/messages";
    import {dataURLtoFile, getI18n} from "$lib/utils/functions";
    import FileInput from "$lib/components/base/FileInput.svelte";
    import Form from "$lib/components/base/Form.svelte";
    import {generateId} from "lucia";

    export let data;

    const form = superForm(data.form, {
        validators: zodClient(escapeEditZodSchema),
        dataType: "json"
    });


    const { form: formData, enhance } = form;

    function addItem(id: Locale) {
        $formData.langs = [...$formData.langs, id];
    }

    function removeItem(id: string) {
        $formData.langs = $formData.langs.filter((i) => i !== id);
    }

    function handleSlug(name: string) {
        $formData.slug = replaceSpecialCharacter(name)
            .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
            .replaceAll(" ", "-")
            .toLowerCase();
    }

    const defaultImage = {
        file: dataURLtoFile($formData.image.data, $formData.name),
        base64: $formData.image.data,
        id: generateId(8)
    };

</script>

<section class="container py-12 flex flex-col gap-10">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Admin - Escape - Creation</h1>
    <Form {formData} {enhance} class="flex flex-row gap-8 max-sm:flex-col" enctype="multipart/form-data" method="POST">
        <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-row gap-4">
                <Field class="w-full" {form} name="name">
                    <Control let:attrs>
                        <Label>{m.name()}</Label>
                        <Input {...attrs} bind:value={$formData.name} on:input={(e) => handleSlug(e.target?.value)}
                               placeholder={m.escape_creation_name()}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-full" {form} name="slug">
                    <Control let:attrs>
                        <Label>Slug</Label>
                        <Input {...attrs} bind:value={$formData.slug} class="pointer-events-none opacity-50"
                               placeholder={m.escape_creation_slug()} tabindex={-1}/>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Field {form} name="description">
                <Control let:attrs>
                    <Label>{m.description()}</Label>
                    <Textarea {...attrs} bind:value={$formData.description} placeholder={m.escape_creation_description()}/>
                </Control>
                <FieldErrors/>
            </Field>
            <Fieldset class="space-y-2" {form} name="langs">
                <div class="text-sm font-medium">{m.escape_langs()}</div>
                <div class="flex flex-row gap-4">
                    {#each availableLanguageTags as lang}
                        <div class="flex flex-row space-x-2 items-center">
                            <Control let:attrs>
                                <Checkbox
                                        {...attrs}
                                        checked={$formData.langs.includes(lang)}
                                        onCheckedChange={(v) => {
                                    if (v) {
                                      addItem(lang);
                                    } else {
                                      removeItem(lang);
                                    }
                                  }}
                                />
                                <Label class="text-sm max-sm:text-xl font-normal">
                                    <div class="flex">
                                        <!--<svelte:component this={lang === 'en' ? EnglishIcon : FrenchIcon} />!-->
                                        {getI18n(`locale_${lang}`)}
                                    </div>
                                </Label>
                                <input
                                        hidden
                                        type="checkbox"
                                        name={attrs.name}
                                        value={lang}
                                        checked={$formData.langs.includes(lang)}
                                />
                            </Control>
                        </div>
                    {/each}
                </div>
            </Fieldset>
            <div class="space-y-2">
                <div class="text-sm font-medium">{m.difficulty()}</div>
                <div class="flex items-center gap-4">
                    {#each ESCAPE.difficulties as difficulty}
                        <!--                         Easy = success, Medium = primary, Hard = destructive-->
                        {@const color = difficulty === 'easy' ? 'success' : difficulty === 'medium' ? 'primary' : 'destructive'}
                        <Button
                                type="button"
                                variant="outline"
                                class={`h-10 border border-[var(--bt-diff-clr)] w-full p-2 rounded-md cursor-pointer hover:bg-[var(--bt-diff-clr)] ${
                        $formData.difficulty === difficulty ? "bg-[var(--bt-diff-clr)]" : ""
                    }`}
                                on:click={() => {
                        $formData.difficulty = difficulty;
                    }}
                                style="--bt-diff-clr: hsl(var(--{color}))"
                        >
                            {getI18n(`${difficulty}`)}
                        </Button>
                    {/each}
                </div>
            </div>
            <div class="space-y-2">
                <div class="text-sm font-medium">{m.escape_puzzle_difficulty()}</div>
                <div class="flex items-center gap-4">
                    {#each ESCAPE.puzzle as puzzle}
                        <!--                        Beginner = info, Intermediate = success, Advanced = primary, Expert = destructive-->
                        {@const color = puzzle === 'beginner' ? 'info' : puzzle === 'intermediate' ? 'success' : puzzle === 'advanced' ? 'primary' : 'destructive'}
                        <Button
                                type="button"
                                variant="outline"
                                class={`h-10 border border-[var(--bt-diff-clr)] w-full p-2 rounded-md cursor-pointer hover:bg-[var(--bt-diff-clr)] ${
                        $formData.puzzle === puzzle ? "bg-[var(--bt-diff-clr)]" : ""
                    }`}
                                on:click={() => {
                        $formData.puzzle = puzzle;
                    }}
                                style="--bt-diff-clr: hsl(var(--{color}))"
                        >
                            {getI18n(`${puzzle}`)}
                        </Button>
                    {/each}
                </div>
            </div>
            <div class="flex flex-row max-sm:grid max-sm:grid-cols-3 gap-4 items-center">
                <Field class="w-full max-sm:order-last max-sm:col-span-3" {form} name="time">
                    <Control let:attrs>
                        <Label>{m.time()}</Label>
                        <Input {...attrs} bind:value={$formData.time} class="input-time" type="time"/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-full max-sm:col-span-2" {form} name="price">
                    <Control let:attrs>
                        <Label>{m.price()}</Label>
                        <Input {...attrs} bind:value={$formData.price} type="number"/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-1/4 pt-8" {form} name="public">
                    <Control let:attrs>
                        <div class="flex flex-row items-center space-x-2">
                            <Switch {...attrs} bind:checked={$formData.public}/>
                            <Label>{m.public_()}</Label>
                        </div>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <div class="flex flex-row gap-4 max-sm:grid max-sm:grid-cols-2">
                <Field class="w-full max-sm:col-span-2" {form} name="address">
                    <Control let:attrs>
                        <Label>{m.address()}</Label>
                        <Input {...attrs} bind:value={$formData.address} placeholder={m.escape_creation_address()}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-full" {form} name="city">
                    <Control let:attrs>
                        <Label>{m.city()}</Label>
                        <Input {...attrs} bind:value={$formData.city} placeholder={m.escape_creation_city()}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-full max-w-24 max-sm:max-w-full" {form} name="postal_code">
                    <Control let:attrs>
                        <Label>{m.postal_code()}</Label>
                        <Input {...attrs} bind:value={$formData.postal_code} placeholder="68940" type="number"/>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Button class="max-sm:hidden">{m.submit()}</Button>
        </div>
        <div class="flex flex-col w-full gap-2 pt-8 max-sm:pt-0">
            <Fieldset class="h-full" {form} name="image">
                <Control let:attrs>
                    <FileInput
                            accept="image/png, image/jpeg, image/jpg"
                            {attrs}
                            on:input={(e) => {
                                const files = e.currentTarget?.files || e.detail?.currentTarget?.files || [];
                                $formData.image = Array.from(files)[0]
                            }}
                            required={false}
                            image={defaultImage}
                    />
                </Control>
            </Fieldset>
        </div>
        <Button class="max-sm:visible sm:hidden">{m.submit()}</Button>
    </Form>
</section>

