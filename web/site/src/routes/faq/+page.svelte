<script lang="ts">
import { Input } from "$lib/components/ui/input";
import { IconSearch } from "@tabler/icons-svelte";
import ComputerImage from "$lib/components/illustrations/ComputerImage.svelte"
</script>

<section class="max-w-[1080px] mx-auto">
    <div class="hero py-12 flex flex-row items-center justify-between">
        <div class="left flex flex-col gap-4">
            <h1 class="text-5xl font-extrabold">How can we <span class="text-primary">help you</span>?</h1>
            <p class="text-xl  font-thin">Here you can find our FAQ page and find the answer you need.</p>
            <div class="flex flex-col items-end">
                <Input class="rounded-2xl" placeholder="What do you need ?"/>
                <IconSearch stroke="1.5" class="stroke-muted-foreground absolute translate-y-2 -translate-x-2 "/>
            </div>
        </div>

        <div>
            <ComputerImage/>
        </div>
    </div>

    <div class="flex items-start content-start gap-x-24 self-stretch flex-wrap justify-center">
        <div class="flex flex-col gap-4">
            <span>General questions</span>
                <div class="flex flex-col gap-2 ">
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Do children cost extra ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                </div>
        </div>
        <div class="flex flex-col gap-4">
            <span>General questions</span>
                <div class="flex flex-col gap-2 ">
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Do children cost extra ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                </div>
        </div>
        <div class="flex flex-col gap-4">
            <span>General questions</span>
                <div class="flex flex-col gap-2 ">
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Do children cost extra ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                </div>
        </div>
        <div class="flex flex-col gap-4">
            <span>General questions</span>
                <div class="flex flex-col gap-2 ">
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Do children cost extra ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                    <a href="/">Can we bring our dog ?</a>
                </div>
        </div>
    </div>

</section>