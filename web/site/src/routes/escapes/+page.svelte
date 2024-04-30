<script lang="ts">
    import * as m from "$paraglide/messages";
    import EscapeCard from '$lib/components/home/EscapeCard.svelte';

    export let data: { escapes: never[] };
    const escapes = data.escapes;
</script>

<div class="container">
    <div class="py-16 flex flex-col gap-4">
        <h2 class="text-5xl font-extrabold md:text-5xl">{@html m.escape_list_title()}</h2>
        <div class="grid grid-cols-3 max-sm:grid-cols-1 justify-items-center gap-4">
            {#each escapes as escape}
                <EscapeCard {escape} />
            {/each}
        </div>
    </div>
</div>