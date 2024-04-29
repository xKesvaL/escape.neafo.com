<script lang="ts">
	import EscapeCard from '$lib/components/home/EscapeCard.svelte';
    import * as m from "$paraglide/messages";
	import { Button } from '$lib/components/ui/button';
	import ReviewCardContainer from '$lib/containers/home/ReviewCardContainer.svelte';

	export let data: { escapes: never[] };

	const escapes = data.escapes;
</script>

<section class="container">
	<div class="flex flex-col-reverse items-center gap-2 md:flex-row">
		<div class="flex flex-col gap-4">
			<h1 class="text-4xl font-extrabold md:text-5xl">
				{@html m.h1_home()}
			</h1>
			<div class="bg-muted-foreground h-[2px] w-24 opacity-25"></div>
			<p class="text-xl">
				{m.hero_home_text()}
			</p>
			<div class="flex flex-row gap-4">
				<Button>{m.book_your_escape()}</Button>
				<Button variant="secondary">{m.virtual_visit()}</Button>
			</div>
		</div>
		<div class="h-full max-h-[350px] md:max-h-[450px] overflow-hidden rounded-2xl">
			<enhanced:img class="object-cover h-full" src="$assets/home/hero_img.png" alt="hero_img"> </enhanced:img>
		</div>
	</div>

	<div class="py-16 flex flex-col gap-4">
		<h2 class="text-3xl font-extrabold md:text-5xl">{m.escapes_container_h2()}</h2>
		<div class="grid grid-cols-3 max-sm:grid-cols-1 justify-items-center gap-4">
			{#each escapes as escape}
				<EscapeCard {escape} />
			{/each}
		</div>
	</div>

	<div class="py-16 max-h-[450px] h-full flex flex-col items-center justify-center relative p-12 overflow-hidden rounded-2xl">
        <enhanced:img class="absolute h-full object-cover max-w-[1200px] w-full  left-0 top-0 -z-10 opacity-50" src="$assets/home/voucher_img.png" alt="hero_img"> </enhanced:img>
		<div class="flex flex-col self-stretch gap-12">
			<div class="flex flex-col gap-5">
				<h3 class="text-3xl md:text-5xl font-extrabold">{m.offer_your_adventure()}</h3>
				<div class="bg-primary h-[2px] w-24"></div>
				<p class="text-2xl md:text-3xl">{m.because_experience()}</p>
			</div>
			<Button class="w-fit">{m.buy_a_voucher()}</Button>
		</div>
	</div>

    <div class="py-16 flex flex-col gap-16">
        <h3 class="text-3xl md:text-5xl font-extrabold">{m.review_home_h3()}</h3>
            <ReviewCardContainer/>
    </div>
</section>
