<script lang="ts">
    import {onMount} from "svelte";
    import {goto, invalidate} from "$app/navigation";
    import { route } from "$lib/ROUTES";

    onMount(async () => {
        const escapeGameList = route("/admin/escapes");
        await invalidate(escapeGameList);

        await goto(escapeGameList);
    })
</script>