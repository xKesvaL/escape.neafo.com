<script lang="ts">
	import { Button as NormalButton } from '$lib/components/ui/button';
	import StepContainer from '$lib/containers/teambuilding/TeambuildingSteps.svelte';
	import ArgumentaryTeambuilding from '$lib/containers/teambuilding/TeambuildingArgumentary.svelte';
	import LogoCompanyContainer from '$lib/containers/teambuilding/TeambuildingCompanies.svelte';
	import { Button, Control, Field, FieldErrors, Label } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { contactTeamBuildingZodSchema } from '@repo/schemas/zod';
	import { Textarea } from '$lib/components/ui/textarea';
	import Form from '$lib/components/base/Form.svelte';
	import { IconSend } from '@tabler/icons-svelte';
	import { getI18n } from '$lib/utils/functions';
	import * as m from '$paraglide/messages';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(contactTeamBuildingZodSchema)
	});

	const { form: formData, enhance } = form;
</script>

<section class="container flex flex-col items-center gap-24">
	<div class="hero flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
		<div class="left flex flex-col justify-between gap-6">
			<h1 class="text-4xl font-extrabold leading-tight md:text-5xl">
				<div class="parent">
					{@html m.h1_teambuilding()}
					<span class="enfant"> </span>
				</div>
			</h1>

			<h3 class="text-2xl">
				<div class="parent">
					{@html m.need_teambuilding()}
					<span class="enfant"> </span>
				</div>
			</h3>

			<div class="flex flex-row gap-4">
				<NormalButton>{m.get_started()}</NormalButton>
				<NormalButton variant="secondary">{m.contact_us()}</NormalButton>
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
			<div class="parent">
				{@html m.teambuilding_argument()}
				<span class="enfant"> </span>
			</div>
		</h2>

		<StepContainer />
	</div>

	<div class="flex w-full flex-col items-center gap-8">
		<h3 class="text-3xl font-semibold">
			<div class="parent">
				{@html m.typical_teambuilding_day()}
				<span class="enfant"> </span>
			</div>
		</h3>

		<div class="h-[200px] w-full md:h-[550px]">
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

	<div class="flex w-full flex-col gap-6">
		<div>
			<h3 class="text-3xl font-semibold">
				<div class="parent">
					{@html m.teambuilding_join_us()}
					<span class="enfant"> </span>
				</div>
			</h3>
			<p class="text-xl">{m.get_in_touch()}</p>
		</div>
		<Form class="flex flex-col gap-6" method="POST" {enhance} {formData}>
			<div class="flex w-full flex-col gap-4 md:flex-row">
				<div class="w-full">
					<Field {form} name="companyName">
						<Control let:attrs>
							<Label>{m.name_of_company()}</Label>
							<Input
								{...attrs}
								bind:value={$formData.companyName}
								placeholder="Name of your Company"
							/>
						</Control>
						<FieldErrors />
					</Field>
				</div>
				<div class="w-full">
					<Field {form} name="email">
						<Control let:attrs>
							<Label>{m.email()}</Label>
							<Input {...attrs} bind:value={$formData.email} placeholder="Email" />
						</Control>
						<FieldErrors />
					</Field>
				</div>
				<div class="w-full">
					<Field {form} name="place">
						<Control let:attrs>
							<Label>{m.place()}</Label>
							<Input {...attrs} bind:value={$formData.place} placeholder="Place" />
						</Control>
						<FieldErrors />
					</Field>
				</div>
			</div>
			<div>
				<Field {form} name="message">
					<Control let:attrs>
						<Label>{m.your_message()}</Label>
						<Textarea
							{...attrs}
							bind:value={$formData.message}
							placeholder="Type your message here"
						/>
					</Control>
					<FieldErrors />
				</Field>
				<p class="text-muted-foreground text-sm">{m.message_support_team()}</p>
			</div>
			<div class="ml-auto grid w-full md:items-end md:justify-items-end">
				<Button class="flex flex-row gap-2">{m.send_message()} <IconSend stroke="1.5" /></Button>
			</div>
		</Form>
	</div>

	<!-- Group of the company in partnership -->
	<LogoCompanyContainer />
</section>

<style lang="postcss">
	:global(.parent .enfant) {
		@apply text-primary;
	}
</style>
