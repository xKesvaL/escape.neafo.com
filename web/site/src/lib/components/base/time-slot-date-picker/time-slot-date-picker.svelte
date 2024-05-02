<script lang="ts">
    import {CalendarSelect} from "$lib/components/base/calendar-select/index.js";
    import {CalendarDate, getLocalTimeZone, today} from "@internationalized/date";
    import {Separator} from "$lib/components/ui/separator";
    import type {Booking, Escape} from "@repo/schemas/zod";
    import type {BookingOptions} from "$lib/utils/types";
    import {Button} from "$lib/components/ui/button";
    import {Input} from "$lib/components/ui/input";

    const timeZone = getLocalTimeZone();
    const todayDate = today(timeZone);

    export let date: string;
    export let bookings: Booking[];
    export let escape: Escape;
    export let selectedDate: CalendarDate = new CalendarDate(todayDate.year, todayDate.month, todayDate.day);
    export let selectedHour: number = 8;

    const bookingOptions = {
        min: escape.min_booking_hour,
        max: escape.max_booking_hour,
        step: escape.step_booking,
        exclude: escape.exclude_booking
    };

    // Bookings going from {bookingOptions.min} to {bookingOptions.max} every {bookingOptions.step} hours with {bookingOptions.exclude} excluded
    const bookingButtons = Array.from({length: (bookingOptions.max - bookingOptions.min) / bookingOptions.step + 1}, (_, i) => {
        const hour = bookingOptions.min + i * bookingOptions.step;
        if (bookingOptions.exclude.includes(hour)) {
            return;
        }
        return hour;
    }).filter(Boolean);


    $: {
        const tempDate = new Date();
        tempDate.setFullYear(selectedDate.year, selectedDate.month - 1, selectedDate.day);
        tempDate.setHours(selectedHour, 0, 0, 0);
        date = tempDate.toISOString();
    }


    const bookingsByDate = bookings.reduce((acc, booking) => {
        const bookingDate = new Date(booking.date);
        bookingDate.setUTCHours(0, 0, 0, 0);
        console.log(bookingDate);
        acc[bookingDate.toISOString()] = acc[bookingDate.toISOString()] || [];
        acc[bookingDate.toISOString()].push(new Date(booking.date));
        return acc;
    }, {});

    // filter out dates with more bookings than available hours
    const disabledDates = Object.entries(bookingsByDate)
        .filter(([_, bookings]) => bookings.length >= bookingButtons.length)
        .map(([date]) => new Date(date));


    console.log(bookingsByDate);

</script>

<CalendarSelect bind:value={selectedDate} {disabledDates}  />
<Separator class="w-[calc(100%-24px)] mx-auto" />
<div class="p-3 grid grid-cols-2 gap-2">
    {#each bookingButtons as hour}
        {@const currentDay = new Date(new Date(date).setUTCHours(0, 0, 0, 0)).toISOString()}
        <!--disable button if hour with date is in bookings -->
        <Button
            class="p-2 border rounded-lg hover:border-primary {selectedHour === hour ? 'bg-primary text-primary-foreground hover:bg-primary' : ''}"
            variant="ghost"
            on:click={() => { selectedHour = hour }}
            disabled={bookingsByDate[currentDay]?.find(date => date.getHours() === hour)}
        >
            {hour}:00
        </Button>
    {/each}
</div>
