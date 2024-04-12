<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { IconSearch } from '@tabler/icons-svelte';
	import ComputerImage from '$lib/components/illustrations/ComputerImage.svelte';
	import QuestionFaq from '$lib/components/faq/QuestionsFaq.svelte';
	import type { FAQ } from '$lib/utils/types';

    const CATEGORIES = ["general","vinoVeritas","bookSeals","lindenTrees","cantataVinum"] as const;

    type Category = (typeof CATEGORIES)[number];

	const titles = {
		general: 'General questions',
		vinoVeritas: 'Questions about In Vino Veritas',
		bookSeals: 'Questions about Book of the 7 Seals',
		lindenTrees: 'Questions about Curse of the 9 Linden Trees',
		cantataVinum: 'Questions about In Cantata Vinum',
	} satisfies { [key in Category]: string  }

	const faqs = {
		general: [
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			}
		],
		vinoVeritas: [
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			}
		],
		bookSeals: [
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			}
		],
		lindenTrees: [
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			}
		
			
		],
		cantataVinum:[
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No, fuck you.'
			},
			{
				question: 'Can we bring our dog ?',
				answer: 'No.'
			}
		]
	} satisfies { [key in Category]: Array<FAQ> }
</script>

<section class="container">
	<div class="hero flex flex-col md:flex-row items-start md:items-center justify-between py-12">
		<div class="left flex flex-col gap-4">
			<h1 class="text-3xl md:text-5xl font-extrabold">
				How can we <span class="text-primary">help you</span>?
			</h1>
			<p class="text-xl font-thin">Here you can find our FAQ page and find the answer you need.</p>
			<div class="flex flex-col items-end">
				<Input class="rounded-2xl" placeholder="What do you need ?" />
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
