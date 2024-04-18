<script lang="ts">
    import type { PageData } from './$types';
    import {
        IconHeart,
        IconShare,
        IconPuzzle,
        IconAntennaBars5,
        IconClock,
        IconDiscount
    } from "@tabler/icons-svelte";
    import { DateFormatter, type DateValue, getLocalTimeZone } from "@internationalized/date";
    import { Separator } from '$lib/components/ui/separator';
    import * as m from '$paraglide/messages';
    import {getI18n} from "$lib/utils/functions";
    import { Calendar } from "$lib/components/ui/calendar/index.js";
    import CalendarIcon from "svelte-radix/Calendar.svelte";
    import { Popover, PopoverTrigger, PopoverContent } from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils/ui.js";
    import {Counter} from "$lib/components/base/counter/index";
    import {Control, Field, FieldErrors, Label, Button as FormButton} from "$lib/components/ui/form";
    import {superForm} from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {userRegisterZodSchema} from "@repo/schemas/zod";
    import Form from '$lib/components/base/Form.svelte';
    import autoAnimate from "@formkit/auto-animate";
    import { formatPrice } from '@repo/utils';

    const df = new DateFormatter("en-US", {
        dateStyle: "long"
    });

    let value: DateValue | undefined = undefined;

    export let data: PageData;

    const { escape } = data;

    const form = superForm(data.form, {
        validators: zodClient(userRegisterZodSchema),
    });

    const { form: formData, enhance } = form;
    const price = Number(escape.price);
    $: isDiscount = $formData.people_number >= 5;
</script>

{#if escape}
    <img class="w-full h-80 object-cover opacity-50" src={escape.image?.data} alt="escape_image" style:view-transition-name="escape-img" />
    <div class="container grid grid-cols-[12fr,5fr] gap-8 -translate-y-20 z-10">
        <div class="flex flex-col bg-card rounded-2xl p-4 gap-8">
            <img class="w-full h-80 rounded-lg object-cover" src={escape.image?.data} alt="escape_image" style:view-transition-name="escape-img" />
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between items-center">
                    <h1 class="text-3xl font-bold">{escape.name}</h1>
                    <div class="flex flex-row gap-4">
                        <IconShare class="text-muted-foreground" stroke="1.5"/>
                        <IconHeart class="text-muted-foreground" stroke="1.5"/>
                    </div>
                </div>
                <p>{escape.description}</p>
            </div>
            <Separator />
            <div class="flex flex-col gap-4">
                <h2 class="font-bold text-xl">More about the escape</h2>
                <div class="flex flex-row gap-4">
                    <div class="px-4 py-3 bg-muted rounded-lg flex flex-row gap-3">
                        {#each escape.langs as lang}
                            <p>{lang}</p>
                        {/each}
                    </div>
                    <div class="px-4 py-3 flex flex-row bg-muted rounded-lg gap-3 items-center">
                        <IconPuzzle class="text-primary" stroke="1.5"/>
                        <p>{m.escape_puzzle_difficulty({ difficulty: getI18n(escape.puzzle) })}</p>
                    </div>
                    <div class="px-4 py-3 flex flex-row bg-muted rounded-lg gap-3 items-center">
                        <IconAntennaBars5 class="text-primary" stroke="1.5"/>
                        <p>{m.escape_difficulty({ difficulty: getI18n(escape.difficulty) })}</p>
                    </div>
                    <div class="px-4 py-3 flex flex-row bg-muted rounded-lg gap-3 items-center">
                        <IconClock class="text-primary" stroke="1.5"/>
                        <p>{m.escape_time({ time: escape.time })}</p>
                    </div>
                </div>
            </div>
            <Separator />
            <div class="flex flex-col gap-4">
                <h2 class="font-bold text-xl">Location of the escape game</h2>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="bg-card p-4 rounded-2xl flex flex-col gap-4">
                <p class="text-3xl font-bold">{price}€ <span class="text-xl font-light">/ person</span></p>
                <Form class="flex flex-col gap-4" {enhance} {formData}>
                    <Field {form} name="date">
                        <Control let:attrs>
                            <Label>Date and time</Label>
                            <Popover>
                                <PopoverTrigger asChild let:builder>
                                    <Button
                                            variant="outline"
                                            class={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !value && "text-muted-foreground"
                                      )}
                                            builders={[builder]}
                                    >
                                        <CalendarIcon class="mr-2 h-4 w-4" />
                                        {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent class="w-auto p-0" align="start">
                                    <Calendar bind:value />
                                </PopoverContent>
                            </Popover>
                        </Control>
                        <FieldErrors/>
                    </Field>
                    <Field {form} name="people_number">
                        <Control let:attrs>
                            <Label>Number of people</Label>
                            <Counter {...attrs} bind:value={$formData.people_number}/>
                        </Control>
                        <FieldErrors/>
                    </Field>
                    <div class="flex flex-col gap-3 p-3 border-muted-foreground rounded-lg border" use:autoAnimate>
                        <p>You won't be charged yet</p>
                        <div class="flex flex-row justify-between">
                            <p class="text-muted-foreground">{formatPrice(price)}€ x {$formData.people_number}</p>
                            <p>{formatPrice(price * $formData.people_number)}€</p>
                        </div>
                        {#if isDiscount}
                            <div class="flex flex-row justify-between">
                                <p class="text-muted-foreground">{$formData.people_number} peoples discount</p>
                                <p>-{formatPrice(price * $formData.people_number * 0.10)}€ (10%)</p>
                            </div>
                        {/if}
                        <hr class="h-[2px] bg-muted-foreground opacity-25">
                        <div class="flex flex-row justify-between">
                            <p>Total before taxes</p>
                            <p>{formatPrice((price * $formData.people_number) - (isDiscount ? price * $formData.people_number * 0.10 : 0))}€</p>
                        </div>
                    </div>
                    <FormButton>Book now</FormButton>
                </Form>
            </div>
            <div class="flex flex-col gap-3 bg-primary rounded-xl p-4">
                <div class="flex flex-row gap-2 items-center">
                    <IconDiscount stroke="1.5"/>
                    <h2 class="text-lg font-bold">Save 15% for groups 5+</h2>
                </div>
                <p>Special offer from us for groups of 5 or more people, get a 15% discount!</p>
            </div>
        </div>
    </div>
{/if}