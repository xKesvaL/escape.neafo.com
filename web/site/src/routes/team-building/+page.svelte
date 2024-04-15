<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="container">
	<div class="hero flex flex-row items-center justify-between gap-5">
		<div class="left flex max-w-[600px] flex-col justify-between gap-6">
			<h1 class="text-5xl font-extrabold">
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
				src="/src/assets/team-building/team-building-hero.png"
				alt="team-building_hero_img"
			>
			</enhanced:img>
		</div>
	</div>

	<div>
		<h2 class="text-center text-3xl font-semibold">
			Simple, transparent and remarkably <span class="text-primary">effective</span>.
		</h2>

		<p class="text-center text-muted-foreground ">
			Tired of struggling with the endless details that go into any successful team building event?
			Then let it go. We’re built to handle even the most complex productions. So you can relax,
			knowing every need has been anticipated. Go ahead – give yourself permission to have fun at
			your own team event for a change. It’s about time.
		</p>

       
	</div>
</section>
