<script lang="ts">
import type { Review } from "$lib/utils/types";
import Avatar from "$assets/home/review/Avatar.svelte";
import * as m from "$paraglide/messages";
import Star from "$assets/home/review/Star.svelte";

const reviews = [
	{
		icon: Avatar,
		stars: 5,
		name: m.review_card_name_0(),
		date: m.review_card_date_0(),
		title: m.review_card_title_0(),
		text: m.review_card_text_0(),
	},

	{
		icon: Avatar,
		stars: 2,
		name: m.review_card_name_0(),
		date: m.review_card_date_0(),
		title: m.review_card_title_0(),
		text: m.review_card_text_0(),
	},

	{
		icon: Avatar,
		stars: 3,
		name: m.review_card_name_0(),
		date: m.review_card_date_0(),
		title: m.review_card_title_0(),
		text: m.review_card_text_0(),
	},
] satisfies Array<Review>;
</script>

<div class="flex flex-col lg:flex-row gap-4 self-stretch ">
	{#each reviews as review}
		<div class="bg-muted flex flex-col gap-4 p-4 border-2 border-primary rounded-2xl w-full ">
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-1 items-center">
				{#each Array(review.stars) as _}
					<Star/>
				{/each}
			</div>
				<enhanced:img src="$assets/auth/google_logo.svg" alt="google_logo">
			</div>
			<div class="flex flex-col gap-1">
				<span class="text-lg font-medium text-white">{review.title}</span>
				<div class="text-muted-foreground text-sm font-normal">
					{review.text}
				</div>
			</div>
			<div class="flex flex-row items-center gap-1">
				<div class="h-fit overflow-hidden rounded-3xl">
					<svelte:component this={review.icon} />
				</div>
				<div class="flex flex-col">
					{review.name}
					<p class="text-muted-foreground">
						{review.date}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>


