<script lang="ts">
    import type { PageData } from './$types';
    import {Button} from "$lib/components/ui/button";
    import { confetti } from '@neoconfetti/svelte';
    import {stats} from "$lib/stores/stats";
    import {goto} from "$app/navigation";


    export let data: PageData;

    const { difference } = data;

    let found = 0;
    let foundMax = difference.differences;

    const onFound = async () => {
        stats.addPoints(100);
        found += 1;

        if (found === foundMax) {
            setTimeout(async () => {
                await goto("/play");
            }, 2500)
        }
    }

</script>

{#if found === foundMax}
    <div use:confetti></div>
{/if}

<div class="p-4 h-full flex-col flex gap-4">
    <svelte:component this={difference.content} on:found={onFound} />
    <div class="flex flex-col justify-center gap-1 items-center">
        <div class="h-2 bg-muted rounded-full w-full">
            <div class="h-2 bg-primary rounded-full transition" style={`width: ${found / foundMax * 100}%`}></div>
        </div>
        <p>
            Differences spoted: {found}/{foundMax}
        </p>
    </div>
</div>
