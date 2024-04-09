<script lang="ts">
	import UsersDataTable from '$lib/containers/admin/users/UsersDataTable.svelte';
    const {data} = $props();

    const users = data.users
</script>

<section class="container">
    <UsersDataTable {users} />
</section>
