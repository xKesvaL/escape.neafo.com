<script lang="ts">
    import { points } from '$lib/stores/points';
    import {IconAlbum, IconUser} from "@tabler/icons-svelte";
</script>

<header class="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-4 bg-card z-10 shadow-lg">
    <div class="flex gap-2 items-center">
        <div class="border rounded h-10 px-3 flex items-center justify-center">
            <p> <span class="text-primary">{$points}</span> points</p>
        </div>
    </div>
    <div class="flex gap-2 items-center">
        <div class="border rounded h-10 w-10 flex justify-center items-center">
            <IconAlbum stroke="1.5" />
        </div>
        <div class="border rounded h-10 w-10 flex justify-center items-center">
            <IconUser stroke="1.5" />
        </div>
    </div>
</header>