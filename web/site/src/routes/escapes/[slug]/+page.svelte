<script lang="ts">
    import type { PageData } from './$types';
    import {
        IconHeart,
        IconShare,
        IconPuzzle,
        IconAntennaBars5,
        IconClock
    } from "@tabler/icons-svelte";
    import * as m from '$paraglide/messages';
    import {getI18n} from "$lib/utils/functions";

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
                        <IconShare class="text-muted-foreground" stroke="1.5"/>
                        <IconHeart class="text-muted-foreground" stroke="1.5"/>
                    </div>
                </div>
                <p>{escape.description}</p>
            </div>
            <hr>
            <div class="flex flex-col gap-4">
                <h2 class="font-bold text-xl">More about the escape</h2>
                <div class="flex flex-row gap-4">
                    <div class="px-4 py-3 bg-muted rounded-lg">
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
        </div>
        <div class="flex flex-col">
            <div class="bg-card p-4 rounded-2xl">
                <p class="text-3xl font-bold">{escape.price}€ <span class="text-xl">/ person</span></p>
            </div>
        </div>
    </div>
{/if}