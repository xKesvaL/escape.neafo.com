<script lang="ts">
	import type { Steps } from '$lib/utils/types';
	import { IconLasso, IconWheel, IconPuzzle, IconRocket } from '@tabler/icons-svelte';
	import {getI18n} from "$lib/utils/functions";
	import * as m from "$paraglide/messages";


	const steps = [
		{
			icon: IconLasso,
			title: '1.Select',
			description:
				'Choose your event or a series of events to fit your goals, budget and calendar. We’re always happy to help with this important first step.'
		},
		{
			icon: IconWheel,
			title: '2.Customize',
			description:
				'There’s real power in strategically tailoring a team event. Customizing around company culture, location, etc. can make all the difference.'
		},
		{
			icon: IconPuzzle,
			title: '3. Organize',
			description:
				'Every event has at least 4 zillion important details. Our event managers are really good at coordinating all of them, so you don’t have to.'
		},

		{
			icon: IconRocket,
			title: '4. Game Day',
			description:
				'Your facilitator and onsite staff deliver an energetic, engaging program. Everyone has fun. Goals are achieved. You get to be the hero.'
		}
	] satisfies Array<Steps>;
</script>

<div class="flex flex-col items-center gap-8">
	<p class="text-muted-foreground text-center max-w-[100ch]">
		{m.teambuilding_steps_text()}
	</p>
	<div class="grid md:grid-cols-2 items-center justify-between gap-8">
		{#each steps as step}
			<div class="flex items-start gap-2">
				<div class="flex-shrink-0">
					<svelte:component this={step.icon} stroke="1.5" class="stroke-primary"  />
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
