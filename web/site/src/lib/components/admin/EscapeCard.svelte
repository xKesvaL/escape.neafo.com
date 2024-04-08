<script>
    import MapPin from "$lib/components/icons/MapPin.svelte"
    import Button from "$lib/components/ui/button/button.svelte"

</script>

<div class="flex bg-transparent bg-accent-foreground rounded-xl  flex-col w-60  p-4 gap-6 shrink-0">
    <div class="card absolute w-60 h-96">

    </div>
    <div class="rounded-xl">
        <enhanced:img src="$assets/escapes/vinea_flamara.png?w=200" alt="escape_image" style:view-transition-name="escape-img" />
    </div>
    <div class="flex flex-col gap-1">
        <p class="text-foreground text-2xl z-10">Vinea Flamara</p>
        <div class="flex gap-1 text-muted flex-row items-center z-10">
            <MapPin></MapPin>
            <p class=" text-l">Ihringen am Kaiserstuhl</p>
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