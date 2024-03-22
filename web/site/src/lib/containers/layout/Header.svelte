<script>
	import { route } from '$lib/ROUTES';
	import * as Popover from '$lib/components/ui/popover/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<header
	class="bg-background/50 sticky left-0 right-0 top-0 flex h-20 items-center justify-between p-4 shadow"
>
	<a href={route('/')}>
		<enhanced:img src="$assets/logo.png?w=162" />
	</a>

	<Popover.Root>
		<Popover.Trigger asChild let:builder>
			<Button builders={[builder]} variant="outline" class="rounded-full">Open</Button>
		</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="font-medium leading-none">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</header>
