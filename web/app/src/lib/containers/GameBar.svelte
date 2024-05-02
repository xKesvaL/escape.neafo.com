<script lang="ts">
    import { stats } from '$lib/stores/stats';
    import {IconAlbum, IconUser} from "@tabler/icons-svelte";
    import {Button} from "$lib/components/ui/button";
    import {route} from "$lib/ROUTES";
    import {page} from "$app/stores";
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-4 bg-card z-10 shadow-lg">
    <div class="flex gap-2 items-center">
        <div class="border rounded h-10 px-3 flex items-center justify-center">
            <p> <span class="text-primary">{$stats.points}</span> points</p>
        </div>
    </div>
    <div class="flex gap-2 items-center">
        <Button class="border rounded h-10 w-10 flex justify-center items-center p-0 bg-background text-foreground {$page.url.pathname === route('/play/album') ? 'bg-primary' : ''}" href={route("/play/album")}>
            <IconAlbum stroke="1.5" />
        </Button>
<!--        <div class="border rounded h-10 w-10 flex justify-center items-center">-->
<!--            <IconUser stroke="1.5" />-->
<!--        </div>-->
    </div>
</header>