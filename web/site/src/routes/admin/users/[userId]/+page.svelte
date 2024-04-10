<script lang="ts">
    const {data} = $props();

    const user = data.user
</script>

<div>

    {#if user}
    {user.email}
    {:else}
    <p>Y'a pas d'utilisateur tu fais pas chier</p>
    {/if}
    
</div>