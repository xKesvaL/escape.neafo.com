<script lang="ts">

	import type { TeambuildingText } from '$lib/utils/types';

	const argumentarys = [
		{
			title: 'PROMOTING COMMUNICATION',
			text:
				'Outdoor escape adventures require strong communication between team members. Participants have to solve puzzles and develop strategies to complete tasks together. This promotes effective communication.'
		},
		{

			title: 'STRENGTHEN CO-OPERATION',
			text:
				'The nature of escape adventures requires teamwork and co-operation. Skills and strengths must be combined to overcome challenges. This shows how important it is to trust and utilise these to achieve common goals.'
		},
		{
	
			title: 'INCREASE SUCCESS',
			text:
				'Shared experiences of success such as those experienced by a team in our outdoor escape adventures not only promote communication and cohesion, they also form a strong basis for future success in the office.'
		},

	] satisfies Array<TeambuildingText>;
</script>

<div class="flex flex-col w-full border-t-2 border-primary gap-14">

    <h3 class="text-3xl font-semibold">Why team-building <span class="text-primary">with us ?</span></h3>

	<div class="flex flex-col gap-14">
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
