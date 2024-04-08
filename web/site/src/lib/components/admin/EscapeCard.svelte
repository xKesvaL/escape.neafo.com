<script lang="ts">
    import MapPin from "$lib/components/icons/MapPin.svelte"
    import Button from "$lib/components/ui/button/button.svelte"
    import type {Escape} from "@repo/schemas/zod";

    interface Props {
        escape: Escape;
    }

    const {escape}: Props = $props();
</script>

<div class="flex bg-transparent bg-accent-foreground rounded-xl  flex-col w-60  p-4 gap-6 shrink-0">
    <div class="card absolute w-60 h-96">

    </div>
    <div class="rounded-xl">
        <enhanced:img src="$assets/escapes/vinea_flamara.png?w=200" alt="escape_image" style:view-transition-name="escape-img" />
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-foreground text-2xl">{escape.name}</p>
        <div class="flex gap-1 text-muted-foreground flex-row items-center">
            <MapPin />
            <p class=" text-l">{escape.city}</p>
        </div>
    </div>
    <div class="flex gap-4 z-10 w-full">
        <Button class="w-full">Edit</Button>
        <Button class="w-full" variant="destructive">Disable</Button>
    </div>
</div>

<style>
    .card{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("../../../assets/escapes/vinea_flamara.png") lightgray 50% / cover no-repeat;
        filter: blur(46px);
    }
</style>