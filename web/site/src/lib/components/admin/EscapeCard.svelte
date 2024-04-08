<script lang="ts">
    import MapPin from "$lib/components/icons/MapPin.svelte"
    import Button from "$lib/components/ui/button/button.svelte"
    import type {Escape} from "@repo/schemas/zod";

    interface Props {
        escape: Escape;
    }

    const {escape}: Props = $props();
</script>

<div class="flex bg-transparent bg-accent-foreground rounded-2xl relative flex-col p-6 gap-6 shrink-0 max-w-96 overflow-hidden bg-card/50">
    <enhanced:img class="absolute w-[150%] h-[150%] blur-3xl opacity-50 -z-10" src="$assets/escapes/vinea_flamara.png?w=300" alt="escape_image" style:view-transition-name="escape-img" />
    <div class="rounded-xl">
        <enhanced:img class="w-full" src="$assets/escapes/vinea_flamara.png?w=300" alt="escape_image" style:view-transition-name="escape-img" />
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-foreground text-2xl">{escape.name}</p>
        <div class="flex gap-1 text-muted-foreground flex-row items-center">
            <MapPin />
            <p class=" text-l">{escape.city}</p>
        </div>
    </div>
    <div class="flex gap-6 w-full">
        <Button class="w-full">Edit</Button>
        <Button class="w-full" variant="destructive">Disable</Button>
    </div>
</div>
