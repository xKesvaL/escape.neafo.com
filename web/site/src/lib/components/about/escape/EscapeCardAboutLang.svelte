<script lang="ts">
    import type {AboutUsEscape} from "$lib/utils/types";
    import FrenchFlag from "$lib/components/icons/FrenchFlag.svelte";
    import EnglishFlag from "$lib/components/icons/EnglishFlag.svelte";

    export let escape: AboutUsEscape;

</script>

<div class="flex flex-col max-h-60 bg-card rounded-xl text-center ">
    <svelte:component this={escape.image} />
    <div class="flex flex-row gap-2 items-center justify-center py-2 px-4">
        <p class="text-sm">Now in</p>
        <FrenchFlag/>
        <p class="text-sm">and</p>
        <EnglishFlag/>
    </div>
</div>