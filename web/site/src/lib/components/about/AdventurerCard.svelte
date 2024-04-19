<script lang="ts">
    import { IconPuzzle, IconBuilding, IconDeviceLaptop } from "@tabler/icons-svelte";
    import type {AboutUsProfile} from "$lib/utils/types";


    export let profile: AboutUsProfile;
</script>

<div class="p-6 flex flex-col gap-6 border border-primary rounded-lg">
    <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">{profile.name}</h1>
        <div class="flex flex-row gap-1 items-center">
            <IconPuzzle size="20" stroke="1.5" class="text-primary"/>
            <p>{profile.role}</p>
        </div>
    </div>
    <svelte:component this={profile.image} />
    <div class="flex flex-col gap-3">
        <div class="flex flex-row gap-2 items-center">
            <IconBuilding stroke="1.5" size="20"/>
            <p>{profile.job}</p>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <IconDeviceLaptop stroke="1.5" size="20"/>
            <p class="occupation">{@html profile.occupation}</p>
        </div>
    </div>
</div>

<style lang="postcss">
    :global(.occupation span) {
        @apply text-primary;
    }
</style>