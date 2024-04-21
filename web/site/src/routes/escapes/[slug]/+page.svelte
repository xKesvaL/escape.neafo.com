<script lang="ts">
    import type {PageData} from './$types';
    import {IconAntennaBars5, IconClock, IconDiscount, IconHeart, IconPuzzle, IconShare} from "@tabler/icons-svelte";
    import {CalendarDate, DateFormatter, getLocalTimeZone, today} from "@internationalized/date";
    import {Separator} from '$lib/components/ui/separator';
    import * as m from '$paraglide/messages';
    import {getI18n, setContextEscapeBooking} from "$lib/utils/functions";
    import {TimeSlotDatePicker} from "$lib/components/base/time-slot-date-picker/index.js";
    import CalendarIcon from "svelte-radix/Calendar.svelte";
    import {Popover, PopoverContent, PopoverTrigger} from "$lib/components/ui/popover/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import {cn} from "$lib/utils/ui.js";
    import {Counter} from "$lib/components/base/counter/index";
    import {Control, Field, FieldErrors, Label} from "$lib/components/ui/form";
    import {superForm} from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {bookingZodSchema} from "@repo/schemas/zod";
    import Form from '$lib/components/base/Form.svelte';
    import autoAnimate from "@formkit/auto-animate";
    import {formatPrice} from '@repo/utils';
    import {languageTag} from "$paraglide/runtime";
    import {onMount} from "svelte";

    const df = new DateFormatter(languageTag(), {
        dateStyle: "long"
    });

    export let data: PageData;

    const { escape, form: dataForm, bookings } = data;

    // Form
    const form = superForm(dataForm, {
        validators: zodClient(bookingZodSchema),
    });

    const { form: formData, enhance } = form;
    const price = Number(escape.price);

    const bookingOptions = {
        min: 8,
        max: 18,
        step: 1,
        exclude: [12]
    };

    const timeZone = getLocalTimeZone();
    const todayDate = today(timeZone);
    let selectedDate = new CalendarDate(todayDate.year, todayDate.month, todayDate.day);
    let selectedHour = 8;

    $: isDiscount = $formData.people_number >= 5;
    $: setContextEscapeBooking(escape._id, {
        date: $formData.date,
        people_number: $formData.people_number,
        escape_id: escape._id
    });

    onMount(() => {
        selectedHour = Math.round(new Date().getHours() / bookingOptions.step) * bookingOptions.step;

        if (selectedHour < bookingOptions.min) {
            selectedHour = bookingOptions.min;
        } else if (selectedHour > bookingOptions.max) {
            selectedHour = bookingOptions.max;
        }
    })
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
                        <p>{m.escape_details_puzzle_difficulty({ difficulty: getI18n(escape.puzzle) })}</p>
                    </div>
                    <div class="px-4 py-3 flex flex-row bg-muted rounded-lg gap-3 items-center">
                        <IconAntennaBars5 class="text-primary" stroke="1.5"/>
                        <p>{m.escape_details_difficulty({ difficulty: getI18n(escape.difficulty) })}</p>
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
                <p class="text-3xl font-bold">{price}€ <span class="text-xl font-light text-muted-foreground">/ person</span></p>
                <Form class="flex flex-col gap-4" method="POST" {enhance} {formData} dev={false}>
                    <div class="flex flex-col gap-2">
                        <Field {form} name="date">
                            <Control let:attrs>
                                <Label>Date and time</Label>
                                <Popover>
                                    <PopoverTrigger asChild let:builder>
                                        <Button
                                                variant="outline"
                                                class={cn(
                                            "w-full justify-start text-left font-normal",
                                            !$formData.date && "text-muted-foreground"
                                          )}
                                                builders={[builder]}
                                        >
                                            <CalendarIcon class="mr-2 h-4 w-4" />
                                            {$formData.date ? df.format($formData.date) : "Pick a date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="w-auto p-0 rounded-xl" align="start" sideOffset={8}>
                                        <TimeSlotDatePicker bind:date={$formData.date} {bookings} bind:selectedDate bind:selectedHour />
                                    </PopoverContent>
                                </Popover>
                            </Control>
                            <FieldErrors/>
                        </Field>
                        <Field {form} name="people_number">
                            <Control let:attrs>
                                <Label>Number of people</Label>
                                <Counter min={2} {...attrs} bind:value={$formData.people_number}/>
                            </Control>
                            <FieldErrors/>
                        </Field>
                    </div>
                    <div class="flex flex-col gap-3 p-3 border-input rounded-lg border" use:autoAnimate>
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
                    <Button>Book now</Button>
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