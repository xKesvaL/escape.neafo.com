<script lang="ts">
	import type { TeamBuildingText } from '$lib/utils/types';
	import * as m from '$paraglide/messages';

	const argumentarys = [
		{
			title: m.teambuilding_argumentary_0_title(),
			text: m.teambuilding_argumentary_0_text()
		},
		{
			title: m.teambuilding_argumentary_1_title(),
			text: m.teambuilding_argumentary_1_text()
		},
		{
			title: m.teambuilding_argumentary_2_title(),
			text: m.teambuilding_argumentary_2_text()
		}
	] satisfies Array<TeamBuildingText>;
</script>

<div class="border-primary flex w-full flex-col gap-12 border-t-2">
	<h3 class="whitespace-break-spaces text-3xl font-semibold">
		{@html m.teambuilding_argumentary_h3()}
	</h3>

	<div class="flex flex-col gap-12">
		{#each argumentarys as argumentary}
			<div class="flex flex-col gap-2">
				<span class="text-xl text-white">{argumentary.title}</span>
				<div class="text-base font-normal">
					{argumentary.text}
				</div>
			</div>
		{/each}
	</div>
</div>
