<script lang="ts">
    import {Button, Control, Field, FieldErrors, Fieldset, Label} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
    import {Textarea} from "$lib/components/ui/textarea";
    import {Switch} from "$lib/components/ui/switch";
    import {escapeCreateZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';
    import {Checkbox} from "$lib/components/ui/checkbox";
    import {availableLanguageTags} from '$paraglide/runtime';
    import {ESCAPE} from '@repo/global-config';
    import replaceSpecialCharacter from 'replace-special-characters'
    import type {Locale} from "$lib/config/brand";
    import * as m from '$paraglide/messages';
    import {getI18n} from "$lib/utils/functions";

    const {data} = $props();

    const form = superForm(data.form, {
        validators: zodClient(escapeCreateZodSchema)
    });

    const {form: formData, enhance} = form;

    function addItem(id: Locale) {
        $formData.langs.push(id);
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

</script>

<section class="container py-12 flex flex-col gap-10">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Admin - Escape - Creation</h1>
    <form class="flex flex-row gap-8" method="POST" use:enhance>
        <div class="flex flex-col gap-4 w-full">
            <div class="flex flex-row gap-4">
                <Field {form} class="w-full" name="name">
                    <Control let:attrs>
                        <Label>{m.name()}</Label>
                        <Input placeholder="Cool escape game" {...attrs} bind:value={$formData.name} on:input={(e) => handleSlug(e.target.value)} />
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} class="w-full" name="slug">
                    <Control let:attrs>
                        <Label>Slug</Label>
                        <Input placeholder="cool-escape-game" class="pointer-events-none opacity-50" tabindex="-1" {...attrs} bind:value={$formData.slug} />
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Field {form} name="description">
                <Control let:attrs>
                    <Label>{m.description()}</Label>
                    <Textarea placeholder="Description of the escape..." {...attrs} bind:value={$formData.description}/>
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
                                <Label class="text-sm font-normal">
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
                                onclick={() => {
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
                                onclick={() => {
                        $formData.puzzle = puzzle;
                    }}
                                style="--bt-diff-clr: hsl(var(--{color}))"
                        >
                            {getI18n(`${puzzle}`)}
                        </Button>
                    {/each}
                </div>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <Field {form} class="w-full" name="time">
                    <Control let:attrs>
                        <Label>{m.time()}</Label>
                        <Input {...attrs} bind:value={$formData.time} class="input-time" type="time"/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} class="w-full" name="price">
                    <Control let:attrs>
                        <Label>{m.price()}</Label>
                        <Input {...attrs} bind:value={$formData.price} type="number"/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} class="w-1/4 pt-8" name="public">
                    <Control let:attrs>
                        <div class="flex flex-row items-center space-x-2">
                            <Switch {...attrs} bind:checked={$formData.public}/>
                            <Label>{m.public_()}</Label>
                        </div>

                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <div class="flex flex-row gap-4">
                <Field {form} class="w-full" name="address">
                    <Control let:attrs>
                        <Label>{m.address()}</Label>
                        <Input placeholder="18 street of street" {...attrs} bind:value={$formData.address}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field {form} class="w-full" name="city">
                    <Control let:attrs>
                        <Label>{m.city()}</Label>
                        <Input placeholder="City" {...attrs} bind:value={$formData.city}/>
                    </Control>
                    <FieldErrors/>
                </Field>
                <Field class="w-full max-w-24" {form} name="postal_code">
                    <Control let:attrs>
                        <Label>{m.postal_code()}</Label>
                        <Input placeholder="68940" {...attrs} bind:value={$formData.postal_code} type="number"/>
                    </Control>
                    <FieldErrors/>
                </Field>
            </div>
            <Button>{m.submit()}</Button>
        </div>
        <div class="flex flex-col w-full gap-2 pt-8">
            <div class="relative rounded w-full h-full items-center bg-white">
                <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Image</p>
            </div>
            <div class="flex flex-row h-40 gap-2">
                <div class="relative square rounded h-full w-full bg-white">
                    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Image</p>
                </div>
                <div class="relative square rounded h-full w-full bg-white">
                    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Image</p>
                </div>
                <div class="relative square rounded h-full w-full bg-white">
                    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Image</p>
                </div>
                <div class="relative square rounded h-full w-full bg-white">
                    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Image</p>
                </div>
            </div>
        </div>

    </form>
</section>
