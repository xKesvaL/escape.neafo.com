<script lang="ts">
    import {Field, Fieldset, Control, Label, FieldErrors, Button} from '$lib/components/ui/form';
    import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "$lib/components/ui/select";
    import {Input} from '$lib/components/ui/input';
    import {escapeCreateZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';
    import {Checkbox} from "$lib/components/ui/checkbox";
    import { availableLanguageTags } from '$paraglide/runtime';
    import { ESCAPE } from '@repo/global-config';
    import type {Locale} from "$lib/config/brand";

    const {data} = $props();

    const form = superForm(data.form, {
        validators: zodClient(escapeCreateZodSchema)
    });

    const {form: formData, enhance} = form;

    function addItem(id: Locale) {
        $formData.langs = [...$formData.langs, id];
    }

    function removeItem(id: string) {
        $formData.langs = $formData.langs.filter((i) => i !== id);
    }
</script>

<section class="container">
    <form method="POST" use:enhance>
        <Field {form} name="name">
            <Control let:attrs>
                <Label>Name</Label>
                <Input {...attrs} bind:value={$formData.name}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="description">
            <Control let:attrs>
                <Label>Description</Label>
                <Input {...attrs} bind:value={$formData.description}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Fieldset {form} name="langs">
            {#each availableLanguageTags as lang}
                <div class="flex flex-row items-start space-x-3">
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
                            {lang}
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
        </Fieldset>
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
                <Label>Time</Label>
                <Input {...attrs} bind:value={$formData.time} type="time"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="address">
            <Control let:attrs>
                <Label>Address</Label>
                <Input {...attrs} bind:value={$formData.address}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="city">
            <Control let:attrs>
                <Label>City</Label>
                <Input {...attrs} bind:value={$formData.city}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="postal_code">
            <Control let:attrs>
                <Label>Postal code</Label>
                <Input {...attrs} bind:value={$formData.postal_code} type="number"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="price">
            <Control let:attrs>
                <Label>Price</Label>
                <Input {...attrs} bind:value={$formData.price} type="number"/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button>Submit</Button>
    </form>
</section>
