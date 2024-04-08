<script lang="ts">
    import EscapeCard from '$lib/components/admin/EscapeCard.svelte'

    const {data} = $props();

    const games = data.escapes;
</script>

{#each games as game}
    <EscapeCard name="{games.name}"></EscapeCard>
{/each}