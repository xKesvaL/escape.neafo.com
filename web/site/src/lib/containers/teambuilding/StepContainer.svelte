<script lang="ts">
	import Step from '$lib/components/teambuilding/Step.svelte';
	import type { Steps } from '$lib/utils/types';

	const steps = [
		{
			iconPath: 'src/assets/teambuilding/Lasso-select.svg',
			title: '1.Select',
			description:
				'Choose your event or a series of events to fit your goals, budget and calendar. We’re always happy to help with this important first step.'
		},
		{
			iconPath: 'src/assets/teambuilding/Wheel.svg',
			title: '2.Customize',
			description:
				'There’s real power in strategically tailoring a team event. Customizing around company culture, location, etc. can make all the difference.'
		},
		{
			iconPath: 'src/assets/teambuilding/Puzzle.svg',
			title: '3. Organize',
			description:
				'Every event has at least 4 zillion important details. Our event managers are really good at coordinating all of them, so you don’t have to.'
		},

		{
			iconPath: 'src/assets/teambuilding/Rocket.svg',
			title: '4. Game Day',
			description:
				'Your facilitator and onsite staff deliver an energetic, engaging program. Everyone has fun. Goals are achieved. You get to be the hero.'
		}
	] satisfies Array<Steps>;
</script>

<div class="flex flex-col items-center gap-7">
	<p class="text-muted-foreground text-center">
		Tired of struggling with the endless details that go into any successful team building event?
		Then let it go. We’re built to handle even the most complex productions. So you can relax,
		knowing every need has been anticipated. Go ahead – give yourself permission to have fun at your
		own team event for a change. It’s about time.
	</p>
	<div class="flex flex-wrap content-center items-center justify-between gap-y-6">
		<Step steps={steps} />
	</div>
</div>
