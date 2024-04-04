<script lang="ts">


 
    const {data} = $props();
    const users = data.users

</script>

<section class="container">
Salut
    {#each users as user}
        <li>{user.email}{user._id}</li>
    {/each}
    
</section>
