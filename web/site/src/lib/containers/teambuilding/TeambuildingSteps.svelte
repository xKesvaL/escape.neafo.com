<script lang="ts">
	import type { Steps } from '$lib/utils/types';
	import { IconLasso, IconWheel, IconPuzzle, IconRocket } from '@tabler/icons-svelte';
	import * as m from '$paraglide/messages';

	const steps = [
		{
			icon: IconLasso,
			title: m.teambuilding_steps_0_title(),
			description: m.teambuilding_steps_0_text()
		},
		{
			icon: IconWheel,
			title: m.teambuilding_steps_1_title(),
			description: m.teambuilding_steps_1_text()
		},
		{
			icon: IconPuzzle,
			title: m.teambuilding_steps_2_title(),
			description: m.teambuilding_steps_2_text()
		},

		{
			icon: IconRocket,
			title: m.teambuilding_steps_3_title(),
			description: m.teambuilding_steps_3_text()
		}
	] satisfies Array<Steps>;
</script>

<div class="flex flex-col items-center gap-24">
	<p class="text-muted-foreground max-w-[100ch] text-center">
		{m.teambuilding_steps_text()}
	</p>
	<div class="grid items-center justify-between gap-12 md:grid-cols-2">
		{#each steps as step}
			<div class="flex items-start gap-2">
				<div class="flex-shrink-0">
					<svelte:component this={step.icon} stroke="1.5" class="stroke-primary" />
				</div>
				<div class="flex flex-col gap-4">
					<span class="text-lg font-semibold text-white">{step.title}</span>
					<div class="text-base font-normal">
						{step.description}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
