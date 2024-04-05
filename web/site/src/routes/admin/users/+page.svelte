<script lang="ts">
	import DataTable from '$lib/containers/admin/users/DataTable.svelte';
    const {data} = $props();
    const users = data.users


</script>

<section class="container">

    <DataTable />
   
  
    
</section>
