<script lang="ts">
	import type { TeambuildingText } from '$lib/utils/types';

	export let argumentarys: Array<TeambuildingText> = [];
</script>

{#each argumentarys as argumentary}
	<div class="flex flex-col gap-2">
		<span class="text-xl text-white">{argumentary.title}</span>
		<div class="text-base font-normal">
			{argumentary.text}
		</div>
	</div>
{/each}
