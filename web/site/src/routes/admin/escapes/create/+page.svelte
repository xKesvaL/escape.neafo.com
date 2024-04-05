<script lang="ts">
    import {Field, Fieldset, Control, Label, FieldErrors, Button} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
    import {escapeCreateZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';
    import {Checkbox} from "$lib/components/ui/checkbox";
    import { availableLanguageTags } from '$paraglide/runtime';
    import { ESCAPE } from '@repo/global-config';
    import replaceSpecialCharacter from 'replace-special-characters'
    import type {Locale} from "$lib/config/brand";
    import * as m from '$paraglide/messages';
    import {getI18n} from "$lib/utils/functions";
    import FrenchIcon from "$lib/components/icons/FrenchFlag.svelte";
    import EnglishIcon from "$lib/components/icons/EnglishFlag.svelte";

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
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Administration - Create Escape</h1>
    <form method="POST" use:enhance>
        <div class="flex">
            <Field {form} name="name">
                <Control let:attrs>
                    <Label>{m.name()}</Label>
                    <Input {...attrs} bind:value={$formData.name} on:input={(e) => handleSlug(e.target.value)} />
                </Control>
                <FieldErrors/>
            </Field>
            <Field {form} name="slug">
                <Control let:attrs>
                    <Label>Slug</Label>
                    <Input class="pointer-events-none opacity-50" tabindex="-1" {...attrs} bind:value={$formData.slug} />
                </Control>
                <FieldErrors/>
            </Field>
        </div>
        <Field {form} name="description">
            <Control let:attrs>
                <Label>{m.description()}</Label>
                <Input {...attrs} bind:value={$formData.description}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Fieldset {form} name="langs">
            <div class="text-sm font-medium">Language(s)</div>
            <div class="flex flex-row gap-4">
                {#each availableLanguageTags as lang}
                    <div class="flex flex-row items-start space-x-1">
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
                                    <svelte:component this={lang === 'en' ? EnglishIcon : FrenchIcon} />
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
        <div class="text-sm font-medium">{m.difficulty()}</div>
        <div class="flex items-center gap-4">
            {#each ESCAPE.difficulties as difficulty}
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
                    {difficulty}
                </Button>
            {/each}
        </div>
        <div class="text-sm font-medium">{m.escape_puzzle_difficulty()}</div>
        <div class="flex items-center gap-4">
            {#each ESCAPE.puzzle as puzzle}
                {@const color = puzzle === 'beginner' ? 'info' : puzzle === 'medium' ? 'success' : puzzle === 'advanced' ? 'primary' : 'destructive'}
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
                    {puzzle}
                </Button>
            {/each}
        </div>
        <Field {form} name="time">
            <Control let:attrs>
                <Label>{m.time()}</Label>
                <Input {...attrs} bind:value={$formData.time} type="time"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="address">
            <Control let:attrs>
                <Label>{m.address()}</Label>
                <Input {...attrs} bind:value={$formData.address}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="city">
            <Control let:attrs>
                <Label>{m.city()}</Label>
                <Input {...attrs} bind:value={$formData.city}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="postal_code">
            <Control let:attrs>
                <Label>{m.postal_code()}</Label>
                <Input {...attrs} bind:value={$formData.postal_code} type="number"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="price">
            <Control let:attrs>
                <Label>{m.price()}</Label>
                <Input {...attrs} bind:value={$formData.price} type="number"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button>{m.submit()}</Button>
    </form>
</section>
