<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import StepContainer from '$lib/containers/teambuilding/StepContainer.svelte';
	import VideoContainer from '$lib/containers/teambuilding/VideoContainer.svelte';
	import TextContainer from '$lib/containers/teambuilding/TextContainer.svelte';
</script>

<section class="container flex flex-col items-center gap-24">
	<div class="hero flex flex-row items-center justify-between gap-5">
		<div class="left flex max-w-[600px] flex-col justify-between gap-6">
			<h1 class="text-5xl font-extrabold leading-[48px]">
				Find your escape-game for your <span class="text-primary">Teambuilding</span>
			</h1>

			<h3 class="text-2xl">
				Need a <span class="text-primary">team-building activity?</span> Our escapes games are for you
			</h3>

			<div class="flex flex-row gap-7">
				<Button class="text-xl ">Get started</Button>
				<Button class="bg-background border-primary text-primary border-2 text-xl"
					>Contact Us</Button
				>
			</div>
		</div>

		<div class="h-72 overflow-hidden rounded-xl">
			<enhanced:img
				class="h-[100%] object-cover"
				src="/src/assets/teambuilding/team-building-hero.png"
				alt="team-building_hero_img"
			>
			</enhanced:img>
		</div>
	</div>

	<div class="flex max-w-[900px] flex-col items-center gap-7">
		<h2 class="text-center text-3xl font-semibold">
			Simple, transparent and remarkably <span class="text-primary">effective</span>.
		</h2>

		<StepContainer />
	</div>

	<VideoContainer/>

	<TextContainer/>

</section>
