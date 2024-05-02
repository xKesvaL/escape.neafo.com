<script lang="ts">
    import { IconPuzzle, IconBuilding, IconDeviceLaptop } from "@tabler/icons-svelte";
    import type {AboutUsProfile} from "$lib/utils/types";


    export let profile: AboutUsProfile;
</script>

<div class="p-6 flex flex-col gap-6 border border-primary rounded-lg">
    <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">{profile.name}</h1>
        <div class="flex flex-row gap-2 items-start">
            <IconPuzzle size={20} class="flex-shrink-0 text-primary" stroke="1.5"/>
            <p class="text-sm">{profile.role}</p>
        </div>
    </div>
    <svelte:component this={profile.image} />
    <div class="flex flex-col gap-3">
        <div class="flex flex-row gap-2 items-start">
            <IconBuilding stroke="1.5" size={20} class="flex-shrink-0"/>
            <p class="text-sm">{profile.job}</p>
        </div>
        {#if profile.occupation !== ""}
            <div class="flex flex-row gap-2 items-start">
                <IconDeviceLaptop stroke="1.5" size={20} class="flex-shrink-0"/>
                <p class="occupation text-sm">{@html profile.occupation}</p>
            </div>
        {/if}
    </div>
</div>

<style lang="postcss">
    :global(.occupation span) {
        @apply text-primary;
    }
</style>