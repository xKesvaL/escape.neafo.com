<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Pencil from '@tabler/icons-svelte/IconPencil.svelte';
	import * as m from '$paraglide/messages';
	export let data;

	const user = data.user;
</script>

<section class="container container-sm flex flex-col gap-4 py-16">
	<h1 class="py-4 text-3xl font-semibold">My profile</h1>

	<div
		class="border-muted-foreground flex flex-col justify-center gap-4 rounded-2xl border-[1px] p-6 align-top"
	>
		<div
			class="border-muted-foreground flex w-full flex-row flex-wrap gap-2 items-center justify-between border-b-[1px] pb-4"
		>
			<h3 class="font-bold md:text-2xl text-xl">{m.personal_informations()}</h3>
			<Button variant="outline" class="flex flex-row items-center gap-2">
                <span>{m.edit()}</span>
				<Pencil size="16" stroke="2" />
			</Button>
		</div>

		<div class="grid md:grid-cols-3 gap-4 ">
			<div class="flex flex-col gap-1 col-auto">
				<Label class="text-muted-foreground text-lg font-normal">{m.firstname()}</Label>
				<span class="text-xl font-medium">{user.firstname}</span>
			</div>

			<div class="flex flex-col gap-1">
				<Label class="text-muted-foreground text-lg font-normal">{m.role()}</Label>
				<span class="text-xl font-medium">{user.role}</span>
			</div>

			<div class="flex flex-col gap-1  col-end-2">
				<Label class="text-muted-foreground text-lg font-normal">{m.name()}</Label>
				<span class="text-xl font-medium">{user.lastname}</span>
			</div>

			<div class="flex flex-col gap-1">
				<Label class="text-muted-foreground text-lg font-normal">{m.email()}</Label>
				<span class="text-xl font-medium">{user.email}</span>
			</div>
		</div>
	</div>
</section>
