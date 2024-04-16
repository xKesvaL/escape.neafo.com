<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte"
    import IconUsers from "$lib/components/icons/IconUsers.svelte";
    import IconBookOpenCheck from "$lib/components/icons/IconBookOpenCheck.svelte";
    import IconActivity from "$lib/components/icons/IconActivity.svelte";
    import IconEuro from "$lib/components/icons/IconEuro.svelte";
    import IconClock from "$lib/components/icons/IconClock.svelte";
    import IconLink from "$lib/components/icons/IconLink.svelte";
    import IconAlert from "$lib/components/icons/IconAlert.svelte";
    import IconRefresh from "$lib/components/icons/IconRefresh.svelte";
    import IconUser from "$lib/components/icons/IconUser.svelte";
</script>

<div class="container my-16">
    <div class="relative w-auto h-auto items-center">
        <enhanced:img class="absolute top-0 w-[100%] h-[100%] opacity-50 -z-10 " src="$assets/jobs/Header-Jobs-Karriere.jpg" alt=""/>
        <div class="container border-2 py-40 flex flex-col gap-6">
            <div>
                <h1 class="text-5xl font-bold">Join us, team players.</h1>
                <h1 class="text-5xl font-bold">Your <span class="text-primary">talents</span> make people's life shine.</h1>
            </div>
            <div class="flex flex-row gap-4">
                <Button class="rounded-3xl">Open positions</Button>
                <Button class="rounded-3xl text-black bg-white">Learn more</Button>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-3 border-2">
        <div class="border-r-2">
            <div class="my-10 mx-10">
                <p class="text-3xl text-muted-foreground"><span class="text-foreground">Our culture.</span><br>Learning,<br>collaboration,<br>transparency,<br>experimentation,<br>and passion. </p>
            </div>
        </div>
        <div class="border-r-2">
            <div class="my-10 mx-10">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-row gap-4 items-center">
                        <IconUsers/>
                        <p class="text-muted-foreground text-lg">We are a dedicated young team</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconBookOpenCheck/>
                        <p class="text-muted-foreground text-lg">We take team training seriously and hope to make you grow</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconActivity/>
                        <p class="text-muted-foreground text-lg">We search for long-term dedicated team members</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t-2">
            <div class="my-10 mx-10">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-row gap-4 items-center">
                        <IconEuro/>
                        <p class="text-muted-foreground text-lg">We believe a good pay is a key to your happiness</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconClock/>
                        <p class="text-muted-foreground text-lg">We leave you free of the hours that matter for you.</p>
                    </div>
                </div>
            </div>
        </div>
    <!-------------------------------------------------------------------------------------------------------------------------!-->
        <div class="border-r-2 border-t-2">
            <div class="my-10 mx-10">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-row gap-4 items-center">
                        <IconLink/>
                        <p class="text-muted-foreground text-lg">You are someone we can count on to be reliable</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconUsers/>
                        <p class="text-muted-foreground text-lg">You believe in team work and are happy to be in one</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconAlert/>
                        <p class="text-muted-foreground text-lg">You have no criminal record and you’re over 18</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t-2">
            <div class="my-10 mx-10">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-row gap-4 items-center">
                        <IconRefresh/>
                        <p class="text-muted-foreground text-lg">You can adapt to most situations quickly.</p>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <IconUser/>
                        <p class="text-muted-foreground text-lg">You make good initiatives by yourself</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-l-2 border-t-2">
            <div class="my-10 mx-10">
                <p class="text-3xl text-muted-foreground"><span class="text-foreground">Your growth.</span><br>Learning,<br>collaboration,<br>transparency,<br>experimentation,<br>and passion. </p>
            </div>
        </div>
    </div>
    <div class="flex flex-row border-l-2 border-r-2 border-b-2">
        <div class="border-r-2 w-1/3">
            <div class="my-10 mx-10">
                <p class="text-3xl text-muted-foreground"><span class="text-foreground">Open positions.</span><br>We're currently,<br>looking for help in:</p>
            </div>
        </div>
        <div class="flex flex-col w-2/3 my-8">
            <div class="border-t-2 flex flex-row justify-between py-8 px-6 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border-2 bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t-2 flex flex-row justify-between py-8 px-6 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border-2 bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t-2 flex flex-row justify-between py-8 px-6 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border-2 bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t-2 flex flex-row justify-between py-8 px-6 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border-2 bg-transparent">Read more</Button>
                </div>
            </div>
            <div class="border-t-2 border-b-2 flex flex-row justify-between py-8 px-6 items-center">
                <div class="flex flex-col">
                    <p class="text-foreground text-xl">This is a good job, we won’t kill you</p>
                    <p class="text-muted-foreground text-lg">Mulhouse, France</p>
                </div>
                <div>
                    <Button class="rounded-3xl border-2 bg-transparent">Read more</Button>
                </div>
            </div>
        </div>
    </div>


</div>