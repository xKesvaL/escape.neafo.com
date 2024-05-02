<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as m from "$paraglide/messages";

    import {
        IconActivity,
        IconBook,
        IconClock,
        IconCurrencyEuro,
        IconExclamationCircle,
        IconLink,
        IconRefresh,
        IconUser,
        IconUsers
    } from "@tabler/icons-svelte";
</script>

<div class="container py-4 md:py-16">
    <div class="relative w-auto h-auto items-center">
        <enhanced:img class="absolute top-0 w-full h-full opacity-30 -z-10 object-cover" src="$assets/jobs/Header-Jobs-Karriere.jpg" alt=""/>
        <div class="container border py-20 md:py-40 flex flex-col gap-8 px-6 md:px-10">
            <div>
                <h1 class="text-3xl md:text-5xl font-bold leading-tight">{@html m.jobs_hero_title()}</h1>
            </div>
            <div class="flex flex-row gap-4">
                <Button class="rounded-3xl">{m.jobs_hero_button_0()}</Button>
                <Button variant="secondary" class="rounded-3xl">{m.jobs_hero_button_1()}</Button>
            </div>
        </div>
    </div>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 border border-t-0 md:grid-rows-3 xl:grid-rows-2">
        <div class="p-6 md:p-10 border-b md:border-b-0">
            <p class="text-2xl md:text-3xl text-muted-foreground">{@html m.jobs_content_case_title_0()}</p>
        </div>
        <div class="p-6 md:p-10 md:border-l xl:border-x flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconUsers class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_0_text_0()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconBook class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_0_text_1()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconActivity class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_0_text_2()}</p>
            </div>
        </div>
        <div class="p-6 md:p-10 flex flex-col gap-8 border-t xl:border-t-0">
            <div class="flex flex-row gap-4 items-center">
                <IconCurrencyEuro class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_1_text_0()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconClock class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_1_text_1()}</p>
            </div>
        </div>
    <!-------------------------------------------------------------------------------------------------------------------------!-->
        <div class="p-6 md:p-10 border-t flex flex-col gap-8 md:border-l xl:border-l-0">
            <div class="flex flex-row gap-4 items-center">
                <IconLink class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_2_text_0()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconUsers class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_2_text_1()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconExclamationCircle class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_2_text_2()}</p>
            </div>
        </div>
        <div class="xl:border-x border-t p-6 md:p-10 flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconRefresh class="text-primary"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_3_text_0()}</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconUser class="text-primary"/>
                <p class="text-muted-foreground text-lg">{@html m.jobs_content_case_3_text_1()}</p>
            </div>
        </div>
        <div class="p-6 md:p-10 border-t md:border-l xl:border-l-0">
            <p class="text-2xl md:text-3xl text-muted-foreground">{@html m.jobs_content_case_title_1()}</p>
        </div>
    </div>
    <div class="grid md:grid-cols-[2fr,3fr] xl:grid-cols-[1fr,2fr] border border-t-0">
        <div class="p-10">
            <p class="text-3xl text-muted-foreground">{@html m.jobs_content_case_title_2()}</p>
        </div>
        <div class="md:border-l flex flex-col py-8">
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">{m.jobs_job_0_title()}</p>
                    <p class="text-muted-foreground text-lg">{m.jobs_job_0_text()}</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">{m.jobs_job_button()}</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">{m.jobs_job_1_title()}</p>
                    <p class="text-muted-foreground text-lg">{m.jobs_job_1_text()}</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">{m.jobs_job_button()}</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">{m.jobs_job_2_title()}</p>
                    <p class="text-muted-foreground text-lg">{m.jobs_job_2_text()}</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">{m.jobs_job_button()}</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">{m.jobs_job_3_title()}</p>
                    <p class="text-muted-foreground text-lg">{m.jobs_job_3_text()}</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">{m.jobs_job_button()}</Button>
                </div>
            </div>
            <div class="border-t border-b flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">{m.jobs_job_4_title()}</p>
                    <p class="text-muted-foreground text-lg">{m.jobs_job_4_text()}</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">{m.jobs_job_button()}</Button>
                </div>
            </div>
        </div>
    </div>


</div>