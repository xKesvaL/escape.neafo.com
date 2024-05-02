<script lang="ts">
import { Button } from "$lib/components/ui/button/index";
import { IconChevronLeft } from "@tabler/icons-svelte";
import { route } from "$lib/ROUTES";
import type { PageServerLoad } from "./$types";

export let data: PageServerLoad;

</script>

<header class="grid grid-cols-[40px,1fr,40px] items-center py-3 px-3">
    <Button variant="ghost" class="p-0" href={route("/play")}>
        <IconChevronLeft />
    </Button>
    <p class="text-center text-lg font-bold">
        Your album
    </p>
    <div></div>
</header>
<section class="grid grid-cols-2 gap-4 container py-3 grid-rows-3">
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[0]?.image}
            <img src={data.albums[0].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[0].name}
            </h2>
        {/if}
    </div>
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[1]?.image}
            <img src={data.albums[1].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[1].name}
            </h2>
        {/if}
    </div>
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[2]?.image}
            <img src={data.albums[2].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[2].name}
            </h2>
        {/if}
    </div>
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[3]?.image}
            <img src={data.albums[3].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[3].name}
            </h2>
        {/if}
    </div>
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[4]?.image}
            <img src={data.albums[4].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[4].name}
            </h2>
        {/if}
    </div>
    <div class="border border-primary rounded p-2 bg-popover shadow flex flex-col gap-1 max-h-52">
        {#if data.albums?.[5]?.image}
            <img src={data.albums[5].image} alt="album cover" class="w-full h-40 object-cover rounded" />
            <h2 class="text-center font-bold text-[12px]">
                {data.albums[5].name}
            </h2>
        {/if}
    </div>
</section>