<script lang="ts">
	import { Button as NormalButton } from '$lib/components/ui/button';
	import StepContainer from '$lib/containers/teambuilding/TeambuildingSteps.svelte';
	import ArgumentaryTeambuilding from '$lib/containers/teambuilding/TeambuildingArgumentary.svelte';
	import LogoCompanyContainer from '$lib/containers/teambuilding/TeambuildingCompanies.svelte';
	import { Control, Field, FieldErrors, Label, Button } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactTeambuildingZodSchema } from '@repo/schemas/zod';
	import { Textarea } from '$lib/components/ui/textarea';
	import Form from '$lib/components/base/Form.svelte';
	import { IconSend } from '@tabler/icons-svelte';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(contactTeambuildingZodSchema)
	});

	const { form: formData, enhance } = form;
</script>

<section class="container flex flex-col items-center gap-24">
	<div class="hero flex flex-row items-center justify-between gap-4">
		<div class="left flex flex-col justify-between gap-6">
			<h1 class="text-5xl font-extrabold leading-tight">
				Find your escape-game for your <span class="text-primary">Teambuilding</span>
			</h1>

			<h3 class="text-2xl">
				Need a <span class="text-primary">team-building activity?</span> Our escapes games are for you
			</h3>

			<div class="flex flex-row gap-4">
				<NormalButton>Get started</NormalButton>
				<NormalButton variant="secondary">Contact Us</NormalButton>
			</div>	
		</div>

		<div class="h-72 overflow-hidden rounded-xl">
			<enhanced:img
				class="h-full object-cover"
				src="/src/assets/teambuilding/team-building-hero.png"
				alt="team-building_hero_img"
			>
			</enhanced:img>
		</div>
	</div>

	<div class="flex flex-col items-center gap-4">
		<h2 class="text-center text-3xl font-semibold">
			Simple, transparent and remarkably <span class="text-primary">effective</span>.
		</h2>

		<StepContainer />
	</div>

	<div class="flex w-full flex-col items-center gap-8">
		<h3 class="text-3xl font-semibold">
			A typical <span class="text-primary">teambuilding</span>
			day with us
		</h3>

		<div class="h-[550px] w-full">
			<iframe
				class="h-[100%] w-[100%] object-cover"
				src="https://www.youtube.com/embed/_DpNZgiwCEY"
				title="We Escape - InVinoVeritas AD 16x9"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			>
			</iframe>
		</div>
	</div>

	<ArgumentaryTeambuilding />


<div class="w-full gap-6 flex flex-col">
	<div>
	<h3 class="text-3xl font-semibold"><span class="text-primary">Join us</span> for your teambuilding</h3>
	<p class="text-xl">Lets get in touch and talk about it</p>
</div>
	<Form class="flex flex-col gap-6" method="POST" {enhance} {formData}>
		<div class="flex w-full flex-row gap-4">
			<div class="w-full">
				<Field {form} name="companyName">
					<Control let:attrs>
						<Label>Name of your company</Label>
						<Input {...attrs} bind:value={$formData.companyName} placeholder="Name of your Company" />
					</Control>
					<FieldErrors />
				</Field>
			</div>
			<div class="w-full">
				<Field {form} name="email">
					<Control let:attrs>
						<Label>Email</Label>
						<Input {...attrs} bind:value={$formData.email} placeholder="Email" />
					</Control>
					<FieldErrors />
				</Field>
			</div>
			<div class="w-full">
				<Field {form} name="place">
					<Control let:attrs>
						<Label>Place</Label>
						<Input {...attrs} bind:value={$formData.place} placeholder="Place" />
					</Control>
					<FieldErrors />
				</Field>
			</div>
		</div>
		<div>
			<Field {form} name="message">
				<Control let:attrs>
					<Label>Your message</Label>
					<Textarea
						{...attrs}
						bind:value={$formData.message}
						placeholder="Type your message here"
					/>
				</Control>
				<FieldErrors />
			</Field>
			<p class="text-muted-foreground text-sm">Your message will be copied to support team.</p>
		</div>
		<div class="ml-auto grid w-full items-end justify-items-end">
			<Button class="flex flex-row gap-2">Send your message <IconSend stroke="1.5" /></Button>
		</div>
	</Form>
</div>

<!-- Group of the company in partnership -->
	<LogoCompanyContainer />
</section>
