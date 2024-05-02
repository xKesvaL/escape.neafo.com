<script lang="ts">
    import EscapeCardAdmin from '$lib/components/admin/EscapeCardAdmin.svelte' ;
    import * as m from "$paraglide/messages"
    import {Button} from "$lib/components/ui/button";
    import { route } from '$lib/ROUTES';

    export let data: { escapes: never[] };

    const escapes = data.escapes;
</script>

<div class="container pb-12 flex flex-col gap-4">
    <header class="flex items-center justify-between">
        <h2>{m.admin_escape_title()}</h2>
        <Button href={route("/admin/escapes/create")}>
            {m.new_()}
        </Button>
    </header>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {#each escapes as escape}
            <EscapeCardAdmin {escape} />
        {/each}
    </div>
</div>