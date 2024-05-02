<script lang="ts">
import UsersDataTable from "$lib/containers/admin/users/UsersDataTable.svelte";

export let data;

const users = data.users;
</script>

<section class="container py-12 md:py-24">
    <UsersDataTable {users}/>
</section>
