<script>
	import { route } from '$lib/ROUTES';
	import * as Popover from '$lib/components/ui/popover/index';
	import { Button } from '$lib/components/ui/button/index';
	import { IconMenu2, IconUser } from '@tabler/icons-svelte';
</script>

<header
	class="bg-background/50 sticky left-0 right-0 top-0 flex h-20 items-center justify-between p-4 shadow backdrop-blur-3xl backdrop-saturate-200"
>
	<a href={route('/')}>
		<enhanced:img src="$assets/logo.png?w=162" alt="" />
	</a>

	<div class="flex gap-8 font-medium">
		<a href={route('/')}>
			Home
		</a>
		<a href="">
			Escape Games
		</a>
		<a href="">
			Teambuilding
		</a>
	</div>

	<Popover.Root>
		<Popover.Trigger asChild let:builder>
			<Button builders={[builder]} variant="outline" class="rounded-full h-[3.25rem] px-1.5 hover:bg-primary">
				<div class="p-2">
					<IconMenu2 />
					<span class="sr-only">Menu</span>
				</div>
				<div class="bg-card rounded-full p-2">
					<IconUser />
					<span class="sr-only">User</span>
				</div>
			</Button>
		</Popover.Trigger>
		<Popover.Content align="end" class="w-80 mt-2">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="font-medium leading-none">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</header>
