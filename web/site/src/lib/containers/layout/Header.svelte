<script>
	import { route } from '$lib/ROUTES';
	import * as Popover from '$lib/components/ui/popover/index';
	import { Button } from '$lib/components/ui/button/index';
	import { IconMenu2, IconUser } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';
	import { BRAND } from '$lib/config/brand';
</script>

<header
	class="bg-background/50 sticky left-0 right-0 top-0 flex h-20 items-center justify-between p-4 shadow backdrop-blur-3xl backdrop-saturate-200"
>
	<a href={route('/')}>
		<enhanced:img src="$assets/logo.png?w=162" alt={BRAND.name} />
	</a>

	<div class="flex gap-8 font-medium">
		<a href={route('/')}> {m.home()} </a>
		<a href=""> Escape Games </a>
		<a href=""> Teambuilding </a>
	</div>

	<Popover.Root>
		<Popover.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="outline"
				class="hover:bg-primary h-[3.25rem] rounded-full px-1.5"
			>
				<span class="sr-only">{m.menu()}</span>
				<div class="p-2">
					<IconMenu2 />
				</div>
				<div class="bg-card rounded-full p-2">
					<IconUser />
				</div>
			</Button>
		</Popover.Trigger>
		<Popover.Content align="end" class="mt-2 w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="font-medium leading-none">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
				<Button>Sign In</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
</header>
