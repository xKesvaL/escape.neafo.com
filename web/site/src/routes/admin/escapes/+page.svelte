<script lang="ts">
    import EscapeCardAdmin from '$lib/components/admin/EscapeCardAdmin.svelte' ;

    export let data: { escapes: never[] };

    const escapes = data.escapes;
</script>

<div class="container pb-12 flex flex-col gap-4">
    <h2>List</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4">
        {#each escapes as escape}
            <EscapeCardAdmin {escape} />
        {/each}
    </div>
</div>