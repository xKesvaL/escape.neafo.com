<script lang="ts">
    import EscapeCardAdmin from '$lib/components/admin/EscapeCardAdmin.svelte' ;
    import * as m from "$paraglide/messages"

    export let data: { escapes: never[] };

    const escapes = data.escapes;
</script>

<div class="container pb-12 flex flex-col gap-4">
    <h2>{m.admin_escape_title()}</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4">
        {#each escapes as escape}
            <EscapeCardAdmin {escape} />
        {/each}
    </div>
</div>