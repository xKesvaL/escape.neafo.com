<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { IconSearch } from '@tabler/icons-svelte';
	import ComputerImage from '$lib/components/illustrations/ComputerImage.svelte';
	import QuestionFaq from '$lib/components/faq/QuestionsFaq.svelte';
	import type { FAQ } from '$lib/utils/types';
	import * as m from "$paraglide/messages"

    const CATEGORIES = ["general","vinoVeritas","bookSeals","lindenTrees","cantataVinum"] as const;

    type Category = (typeof CATEGORIES)[number];

	const titles = {
		general: m.faq_title_general(),
		vinoVeritas: m.faq_title_vino(),
		bookSeals: m.faq_title_book(),
		lindenTrees: m.faq_title_linden(),
		cantataVinum: m.faq_title_cantata(),
	} satisfies { [key in Category]: string  }

	const faqs = {
		general: [
			{
				question: m.faq_general_0_question(),
				answer: m.faq_general_0_answer()
			},
			{
				question: m.faq_general_1_question(),
				answer: m.faq_general_1_answer()
			},
			{
				question: m.faq_general_2_question(),
				answer: m.faq_general_2_answer()
			},
			{
				question: m.faq_general_3_question(),
				answer: m.faq_general_3_answer()
			},
			{
				question: m.faq_general_4_question(),
				answer: m.faq_general_4_answer()
			},
			{
				question: m.faq_general_5_question(),
				answer: m.faq_general_5_answer()
			}
		],
		vinoVeritas: [
			{
				question: m.faq_vino_0_question(),
				answer: m.faq_vino_0_answer()
			},
			{
				question: m.faq_vino_1_question(),
				answer: m.faq_vino_1_answer()
			},
			{
				question: m.faq_vino_2_question(),
				answer: m.faq_vino_2_answer()
			},
			{
				question: m.faq_vino_3_question(),
				answer: m.faq_vino_3_answer()
			},
			{
				question: m.faq_vino_4_question(),
				answer: m.faq_vino_4_answer()
			},
			{
				question: m.faq_vino_5_question(),
				answer: m.faq_vino_5_answer()
			}
		],
		bookSeals: [
			{
				question: m.faq_book_0_question(),
				answer: m.faq_book_0_answer()
			},
			{
				question: m.faq_book_1_question(),
				answer: m.faq_book_1_answer()
			},
			{
				question: m.faq_book_2_question(),
				answer: m.faq_book_2_answer()
			},
			{
				question: m.faq_book_3_question(),
				answer: m.faq_book_3_answer()
			},
			{
				question: m.faq_book_4_question(),
				answer: m.faq_book_4_answer()
			},
			{
				question: m.faq_book_5_question(),
				answer: m.faq_book_5_answer()
			}
		],
		lindenTrees: [
			{
				question: m.faq_linden_0_question(),
				answer: m.faq_linden_0_answer()
			},
			{
				question: m.faq_linden_1_question(),
				answer: m.faq_linden_1_answer()
			},
			{
				question: m.faq_linden_2_question(),
				answer: m.faq_linden_2_answer()
			},
			{
				question: m.faq_linden_3_question(),
				answer: m.faq_linden_3_answer()
			},
			{
				question: m.faq_linden_4_question(),
				answer: m.faq_linden_4_answer()
			},
			{
				question: m.faq_linden_5_question(),
				answer: m.faq_linden_5_answer()
			}
		
			
		],
		cantataVinum:[
			{
				question: m.faq_cantata_0_question(),
				answer: m.faq_cantata_0_answer()
			},
			{
				question: m.faq_cantata_1_question(),
				answer: m.faq_cantata_1_answer()
			},
			{
				question: m.faq_cantata_2_question(),
				answer: m.faq_cantata_2_answer()
			},
			{
				question: m.faq_cantata_3_question(),
				answer: m.faq_cantata_3_answer()
			},
			{
				question: m.faq_cantata_4_question(),
				answer: m.faq_cantata_4_answer()
			},
			{
				question: m.faq_cantata_5_question(),
				answer: m.faq_cantata_5_answer()
			}
		]
	} satisfies { [key in Category]: Array<FAQ> }
</script>

<section class="container">
	<div class="hero flex flex-col md:flex-row items-start md:items-center justify-between py-12">
		<div class="left flex flex-col gap-4">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				{@html m.faq_title()}
			</h1>
			<p class="text-xl font-thin">{m.faq_description()}</p>
			<div class="flex flex-col items-end">
				<Input class="rounded-2xl" placeholder={m.faq_search()} />
				<IconSearch
					stroke="1.5"
					class="stroke-muted-foreground absolute -translate-x-2 translate-y-2 "
				/>
			</div>
		</div>

		<div class="hidden md:block">
			<ComputerImage/>
		</div>
	</div>

	<div class="flex flex-wrap justify-start md:justify-center gap-x-32 gap-y-14 self-stretch mb-10">
		{#each CATEGORIES as category}
			<QuestionFaq faqs={faqs[category]} title={titles[category]} />
		{/each}
	</div>
</section>
