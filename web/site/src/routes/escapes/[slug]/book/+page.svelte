<script lang="ts">
    import type {PageData} from './$types';
    import {
        IconChevronLeft,
    } from "@tabler/icons-svelte";
    import {CalendarDate, DateFormatter} from "@internationalized/date";
    import {Separator} from '$lib/components/ui/separator';
    import * as m from '$paraglide/messages';
    import {Popover, PopoverContent, PopoverTrigger} from "$lib/components/ui/popover";
    import {Button} from "$lib/components/ui/button";
    import {Control, Field, FieldErrors, Label, Button as FormButton} from "$lib/components/ui/form";
    import {superForm} from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import {bookingZodSchema} from "@repo/schemas/zod";
    import Form from '$lib/components/base/Form.svelte';
    import {formatPrice} from '@repo/utils';
    import {languageTag} from "$paraglide/runtime";
    import { route } from '$lib/ROUTES';
    import dayjs from 'dayjs';
    import advancedFormat from 'dayjs/plugin/advancedFormat';
    import {cn} from "$lib/utils/ui";
    import {Input} from "$lib/components/ui/input";
    import {TimeSlotDatePicker} from "$lib/components/base/time-slot-date-picker";
    import {Counter} from "$lib/components/base/counter";
    dayjs.extend(advancedFormat);

    const df = new DateFormatter(languageTag(), {
        dateStyle: "long"
    });

    export let data: PageData;

    const { form: dataForm, booking, escape, existingBookings } = data;

    // Form
    const form = superForm(dataForm, {
        validators: zodClient(bookingZodSchema),
    });Form

    const { form: formData, enhance } = form;
    const price = Number(escape.price);

    const bookingDefaultDate = new Date(booking.date);
    let selectedDate = new CalendarDate(bookingDefaultDate.getFullYear(), bookingDefaultDate.getMonth() + 1, bookingDefaultDate.getDate());
    let selectedHour = bookingDefaultDate.getHours();

    let paymentMethod: 'credit' | 'klarna' = 'credit';

    $: isDiscount = $formData.people_number >= 5;
    $: totalPrice = price * $formData.people_number;
    $: taxes = totalPrice * 0.2;
    $: totalPriceWithTaxes = (isDiscount ? totalPrice * 0.9 : totalPrice) + taxes
</script>

{#if escape}
    <img class="w-full h-80 object-cover opacity-50" src={escape.image?.data} alt="escape_image" />
    <Form class="flex flex-col gap-4" method="POST" {enhance} {formData}>
        <div class="container container-lg grid grid-cols-[12fr,4fr] gap-8 -translate-y-20 z-10">
            <div class="flex flex-col bg-card rounded-2xl p-4 gap-8">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-row gap-4 items-center">
                        <Button variant="ghost" size="icon" href={route('/escapes/[slug]', { slug: escape.slug })}>
                            <IconChevronLeft class="text-muted-foreground" stroke="1.5"/>
                        </Button>
                        <h1 class="text-3xl font-bold">{m.confirm_and_pay()}</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-8">
                    <h2 class="font-medium text-2xl">{m.summary_your_escape()}</h2>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold text-lg">{m.date_and_time()}</p>
                            <p>
                                {m.booking_date_format({
                                    weekDay: dayjs($formData.date).format('dddd'),
                                    day: dayjs($formData.date).format('Do'),
                                    month: dayjs($formData.date).format('MMMM'),
                                    hour: dayjs($formData.date).format('HH:mm')
                                })}
                            </p>
                        </div>
                        <Field {form} name="date">
                            <Control let:attrs>
                                <Input type="hidden" bind:value={$formData.date} {...attrs} />
                                <Popover>
                                    <PopoverTrigger {...attrs} asChild let:builder>
                                        <Button
                                                variant="link"
                                                class={cn(
                                            "w-full justify-start text-left font-normal text-foreground underline",
                                            !$formData.date && "text-muted-foreground"
                                          )}
                                                builders={[builder]}
                                        >
                                            Modify
<!--                                            <CalendarIcon class="mr-2 h-4 w-4" />-->
<!--                                            {$formData.date ? `${df.format(new Date($formData.date))} - ${selectedHour}h00` : "Pick a date"}-->
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="w-auto p-0 rounded-xl" align="end" sideOffset={8}>
                                        <TimeSlotDatePicker bind:date={$formData.date} bookings={existingBookings} bind:selectedDate bind:selectedHour {escape} />
                                    </PopoverContent>
                                </Popover>
                            </Control>
                            <FieldErrors/>
                        </Field>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2">
                            <p class="font-bold text-lg">{m.number_of_people()}</p>
                            <p>
                                {m.number_people({
                                    number: $formData.people_number
                                })}
                            </p>
                        </div>
                        <Field {form} name="people_number">
                            <Control let:attrs>
                                <Input type="hidden" bind:value={$formData.date} {...attrs} />
                                <Popover>
                                    <PopoverTrigger {...attrs} asChild let:builder>
                                        <Button
                                                variant="link"
                                                class={cn(
                                            "w-full justify-start text-left font-normal text-foreground underline",
                                            !$formData.date && "text-muted-foreground"
                                          )}
                                                builders={[builder]}
                                        >
                                            Modify
                                            <!--                                            <CalendarIcon class="mr-2 h-4 w-4" />-->
                                            <!--                                            {$formData.date ? `${df.format(new Date($formData.date))} - ${selectedHour}h00` : "Pick a date"}-->
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="w-auto p-0 border-none" align="end" sideOffset={8}>
                                        <Counter min={2} {...attrs} bind:value={$formData.people_number}/>
                                    </PopoverContent>
                                </Popover>
                            </Control>
                            <FieldErrors/>
                        </Field>
                    </div>
                </div>
                <Separator />
                <div class="flex flex-col gap-8">
                    <h2 class="font-medium text-2xl">{m.choose_how_you_pay()}</h2>
                    <div class="flex flex-col">
                        <button on:click={() => { paymentMethod = 'credit' }} type="button" class="transition flex justify-between cursor-pointer rounded-t-xl border p-4 {paymentMethod === 'credit' ? 'border-foreground' : ''}">
                            <div class="flex flex-col">
                                <p class="text-lg text-foreground text-left">
                                    {m.credit_debit_card()}
                                </p>
                                <p class="text-sm text-left">
                                    {m.pay_total_price_now({ price: formatPrice(totalPriceWithTaxes) })}
                                </p>
                            </div>
                            <div class="w-5 h-5 p-1 rounded-full {paymentMethod === 'credit' ? 'bg-foreground' : ''}">
                                <div class="w-full h-full rounded-full bg-card"></div>
                            </div>
                        </button>
                        <button on:click={() => { paymentMethod = 'klarna' }} type="button" class="transition flex justify-between cursor-pointer rounded-b-xl border p-4 {paymentMethod === 'klarna' ? 'border-foreground' : ''}">
                            <div class="flex flex-col">
                                <p class="text-lg text-foreground text-left">
                                    {m.klarna_payment()}
                                </p>
                                <p class="text-sm text-left">
                                    {m.pay_3_times({ price: formatPrice(totalPriceWithTaxes / 3) })}
                                </p>
                            </div>
                            <div class="w-5 h-5 p-1 rounded-full {paymentMethod === 'klarna' ? 'bg-foreground' : ''}">
                                <div class="w-full h-full rounded-full bg-card"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="bg-card p-4 rounded-2xl flex flex-col gap-4">
                    <div class="flex gap-4">
                        <img class="w-24 h-24 object-cover rounded" src={escape.image?.data} alt={escape.name} />
                        <div class="flex flex-col">
                            <h2 class="text-lg font-bold">
                                {escape.name}
                            </h2>
                            <p>
                                Outdoors
                            </p>
                        </div>
                    </div>
                    <Separator />
                    <div class="flex flex-col gap-2">
                        <h2 class="text-lg font-bold">
                            Price details
                        </h2>
                        <div class="flex justify-between gap-2">
                            <p class="text-muted-foreground">
                                {price}€ × {$formData.people_number} people
                            </p>
                            <p class="font-bold">
                                {formatPrice(totalPrice)}€
                            </p>
                        </div>
                        {#if isDiscount}
                            <div class="flex justify-between gap-2">
                                <p class="text-muted-foreground">
                                    5+ people discount
                                </p>
                                <p class="font-bold">
                                    -{formatPrice(totalPrice * 0.1)}€ (10%)
                                </p>
                            </div>
                        {/if}
                        <div class="flex justify-between gap-2">
                            <p class="text-muted-foreground">
                                Taxes
                            </p>
                            <p class="font-bold">
                                {formatPrice(taxes)}€ (20%)
                            </p>
                        </div>
                    </div>
                    <Separator />
                    <div class="flex justify-between gap-2">
                        <p class="text-lg font-bold">
                            Total
                        </p>
                        <p class="text-lg font-bold">
                            {formatPrice(totalPriceWithTaxes)}€
                        </p>
                    </div>
                    <FormButton>
                        Book
                    </FormButton>
                </div>
            </div>
        </div>
    </Form>
{/if}