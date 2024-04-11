<script lang="ts">
    export let data;

    const user = data.user
</script>

<div>

    {#if user}
    {user.email}
    {:else}
    <p>Y'a pas d'utilisateur tu fais pas chier</p>
    {/if}
    
</div>