<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte"

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

<div class="container py-16">
    <div class="relative w-auto h-auto items-center ">
        <enhanced:img class="absolute top-0 w-full h-full opacity-30 -z-10 object-cover" src="$assets/jobs/Header-Jobs-Karriere.jpg" alt=""/>
        <div class="container border py-40 flex flex-col gap-8 px-10">
            <div>
                <h1 class="text-5xl font-bold leading-tight">
                    Join us, team players. <br />
                    Your <span class="text-primary">talents</span> make people's life shine.
                </h1>
            </div>
            <div class="flex flex-row gap-4">
                <Button class="rounded-3xl">Open positions</Button>
                <Button variant="secondary" class="rounded-3xl">Learn more</Button>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 border border-t-0">
        <div class="p-10">
            <p class="text-3xl text-muted-foreground"><span class="text-foreground">Our culture.</span><br>Learning,<br>collaboration,<br>transparency,<br>experimentation,<br>and passion. </p>
        </div>
        <div class="p-10 border-x flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconUsers class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">We are a <span class="text-foreground">dedicated young</span> team</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconBook class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">We take <span class="text-foreground">team training</span> seriously and hope to <span class="text-foreground">make you grow</span></p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconActivity class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">We search for <span class="text-foreground">long-term</span> dedicated team members</p>
            </div>
        </div>
        <div class="p-10 flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconCurrencyEuro class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">We believe a <span class="text-foreground">good pay</span> is a key to your happiness</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconClock class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">We leave you <span class="text-foreground">free</span> of the hours that <span class="text-foreground">matter for you.</span></p>
            </div>
        </div>
    <!-------------------------------------------------------------------------------------------------------------------------!-->
        <div class="p-10 border-t flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconLink class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">You are someone we can <span class="text-foreground">count on</span> to be <span class="text-foreground">reliable</span></p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconUsers class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">You believe in <span class="text-foreground">team work</span> and are <span class="text-foreground">happy</span> to be in one</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconExclamationCircle class="text-primary flex-shrink-0"/>
                <p class="text-muted-foreground text-lg">You have no <span class="text-foreground">criminal record</span> and you’re <span class="text-foreground">over 18</span></p>
            </div>
        </div>
        <div class="border-x border-t p-10 flex flex-col gap-8">
            <div class="flex flex-row gap-4 items-center">
                <IconRefresh class="text-primary"/>
                <p class="text-muted-foreground text-lg">You can <span class="text-foreground">adapt</span> to most situations <span class="text-foreground">quickly</span>.</p>
            </div>
            <div class="flex flex-row gap-4 items-center">
                <IconUser class="text-primary"/>
                <p class="text-muted-foreground text-lg">You make <span class="text-foreground">good initiatives</span> by yourself</p>
            </div>
        </div>
        <div class="p-10 border-t">
            <p class="text-3xl text-muted-foreground"><span class="text-foreground">Your growth.</span><br>Learning,<br>collaboration,<br>transparency,<br>experimentation,<br>and passion. </p>
        </div>
    </div>
    <div class="grid grid-cols-[1fr,2fr] border border-t-0">
        <div class="p-10">
            <p class="text-3xl text-muted-foreground"><span class="text-foreground">Open positions.</span><br>We're currently,<br>looking for help in:</p>
        </div>
        <div class="border-l flex flex-col py-8">
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t border-b flex flex-row justify-between p-8 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border bg-transparent">Read more</Button>
                </div>
            </div>
        </div>
    </div>


</div>