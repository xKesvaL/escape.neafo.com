<script lang="ts">
    import {CalendarSelect} from "$lib/components/base/calendar-select/index.js";
    import {CalendarDate, getLocalTimeZone, today} from "@internationalized/date";
    import {Separator} from "$lib/components/ui/separator";
    import type {Booking} from "@repo/schemas/zod";
    import type {BookingOptions} from "$lib/utils/types";
    import {Button} from "$lib/components/ui/button";

    const timeZone = getLocalTimeZone();
    const todayDate = today(timeZone);

    export let date: Date;
    export let bookings: Booking[];
    export let bookingOptions: BookingOptions = {
        min: 8,
        max: 18,
        step: 1,
        exclude: [12]
    }
    export let selectedDate: CalendarDate = new CalendarDate(todayDate.year, todayDate.month, todayDate.day);
    export let selectedHour: number = 8;

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
        date = tempDate;
    }

    // get fully booked dates (whole days only) to disable in calendar
    // we generate an object with booking dates as keys and values as the number of bookings for that date
    const fullyBookedDates = bookings.reduce((acc, booking) => {
        const bookingDate = new Date(booking.date);
        bookingDate.setHours(0, 0, 0, 0);
        acc[bookingDate.toISOString()] = (acc[bookingDate.toISOString()] || 0) + 1;
        return acc;
    }, {});

    // filter out dates with more bookings than available hours
    const disabledDates = Object.entries(fullyBookedDates)
        .filter(([_, bookings]) => bookings >= bookingButtons.length)
        .map(([date]) => new Date(date));


</script>

<CalendarSelect bind:value={selectedDate} {disabledDates}  />
<Separator class="w-[calc(100%-24px)] mx-auto" />
<div class="p-3 grid grid-cols-2 gap-2">
    {#each bookingButtons as hour}
        <!--disable button if hour with date is in bookings -->
        <Button class="p-2 border rounded-lg hover:border-primary {selectedHour == hour ? 'bg-primary text-primary-foreground hover:bg-primary' : ''}" variant="ghost" on:click={() => { selectedHour = hour }}>{hour}:00</Button>
    {/each}
</div>
