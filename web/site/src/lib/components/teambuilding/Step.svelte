<script lang="ts">
	import type { Steps } from '$lib/utils/types';

	export let steps: Array<Steps> = [];
</script>

{#each steps as step}
	<div class="flex items-start gap-2 max-w-96">
		<img src={step.iconPath} alt={step.title} />
		<div class="flex flex-col gap-4">
			<span class="pb-2 text-lg font-semibold text-white">{step.title}</span>
			<div class="text-base font-normal">
				{step.description}/>
			</div>
		</div>
	</div>
{/each}
