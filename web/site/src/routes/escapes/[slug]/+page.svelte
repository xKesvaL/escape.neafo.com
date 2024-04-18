<script lang="ts">
    import type { PageData } from './$types';
    import {
        IconHeart,
        IconShare
    } from "@tabler/icons-svelte";

    export let data: PageData;

    const { escape } = data;
</script>

{#if escape}
    <img class="w-full h-80 object-cover opacity-50" src={escape.image?.data} alt="escape_image" style:view-transition-name="escape-img" />
    <div class="container grid grid-cols-[3fr,1fr] gap-8 -translate-y-20 z-10">
        <div class="flex flex-col bg-card rounded-2xl p-4 gap-8">
            <img class="w-full h-80 rounded-lg object-cover" src={escape.image?.data} alt="escape_image" style:view-transition-name="escape-img" />
            <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between items-center">
                    <h1 class="text-3xl font-bold">{escape.name}</h1>
                    <div class="flex flex-row gap-4">
                        <IconShare class="text-muted-foreground"/>
                        <IconHeart class="text-muted-foreground"/>
                    </div>
                </div>
                <p></p>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="bg-card p-4 rounded-2xl">
                <p class="text-3xl font-bold">{escape.price}€ <span class="text-xl">/ person</span></p>
            </div>
        </div>
    </div>
{/if}