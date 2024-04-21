<script lang="ts">
    import type {AboutUsEscape} from "$lib/utils/types";


    export let escape: AboutUsEscape;

</script>

<div class="flex flex-col max-h-60 bg-card rounded-xl text-center ">
    <svelte:component this={escape.image} />
    <p class="text-sm py-2 px-4">Open in <span class="text-primary">{escape.date}</span></p>
</div>