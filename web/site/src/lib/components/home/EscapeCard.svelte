<script lang="ts">
    import {
        IconMapPin,
        IconClock,

    } from "@tabler/icons-svelte";
    import type {Escape} from "@repo/schemas/zod";
    import {route} from "$lib/ROUTES";
    import * as m from "$paraglide/messages";

    export let escape: Escape;

    const time = escape.time.split(":");

</script>

<div class="flex rounded-2xl relative flex-col p-6 gap-4 shrink-0 max-w-96 overflow-hidden bg-card/50">
    <div class="flex w-full gap-2">
        <div class="{
        escape.difficulty === 'easy' || escape.difficulty === 'medium' || escape.difficulty === 'hard' ?  'bg-foreground' : 'bg-muted-foreground'
        }
        rounded-l-xl w-full h-2">
        </div>
        <div class="{
        escape.difficulty === 'medium' || escape.difficulty === 'hard' ?  'bg-foreground' : 'bg-muted-foreground'
        }
        w-full h-2">
        </div>
        <div class="{
        escape.difficulty === 'hard' ?  'bg-foreground' : 'bg-muted-foreground'
        }
        rounded-r-xl w-full h-2">
        </div>
    </div>
    <img class="absolute w-[150%] h-[150%] blur-3xl opacity-50 -z-10" src="{escape.image?.data}" alt="escape_image" style:view-transition-name="escape-img" />
    <div class="rounded-xl">
        <img class="w-full" src="{escape.image?.data}" alt="escape_image" style:view-transition-name="escape-img" />
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-foreground text-2xl">{escape.name}</p>
        <div class="flex justify-between">
            <div class="flex gap-1 text-muted-foreground flex-row items-center">
                <IconMapPin stroke="1.5"/>
                <p class=" text-l">{escape.city}</p>
            </div>
            <div class="flex gap-1 text-muted-foreground items-center">
                <IconClock stroke="1.5"/>
                <p class=" text-l">{time[0]}h{time[1]}</p>
            </div>
        </div>
    </div>
    <a href={route("/escapes/[slug]", {slug: escape.slug})} class="w-full py-[6px] px-4 flex justify-between bg-primary text-foreground rounded">
        <p class="text-xl font-bold">{m.escape_game_card_text()}</p>
        <p class="text-xl font-bold">{escape.price} €</p>
    </a>
</div>
