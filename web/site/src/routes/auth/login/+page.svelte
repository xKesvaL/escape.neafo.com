<script lang="ts">
	import { Field, Control, Label, FieldErrors, Button } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { userRegisterZodSchema } from '@repo/schemas/zod';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import hand from 'site/src/assets/auth/hand.svg';
	import google_logo from 'site/src/assets/auth/google_logo.svg';
	import facebook_logo from 'site/src/assets/auth/facebook_logo.svg';
	import twitter_logo from 'site/src/assets/auth/twitter_logo.svg';
	import * as m from '$paraglide/messages';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(userRegisterZodSchema)
	});

	const { form: formData, enhance } = form;
</script>

<section class="container flex flex-col gap-4 md:mt-0 mt-4">
	<div class="flex flex-row items-center gap-2 text-start">
		<img src={hand} alt="hand" />
		<h1 class="text-3xl font-bold md:text-4xl">{m.welcome_back()}</h1>
	</div>
	<form method="POST" use:enhance class="flex flex-col gap-8">
		<Field {form} name="email">
			<Control let:attrs>
				<Label class="flex">{m.email()}</Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Control>
			<FieldErrors />
		</Field>
		<Field {form} name="password">
			<Control let:attrs>
				<Label class="flex">{m.password()}</Label>
				<Input {...attrs} bind:value={$formData.password} />
			</Control>
			<FieldErrors />
		</Field>
		<Button
			class="to-primary my-2 mt-4 w-full bg-gradient-to-r from-orange-500 py-2 text-center text-2xl font-medium"
			>{m.login()}</Button
		>
	</form>
	<a href="/">
		<p class="text-muted-foreground text-end underline">{m.forgot_password()}</p>
	</a>

	<div class="flex flex-col gap-2">
		<Button
			class="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-white p-2 text-center"
		>
			<img src={google_logo} alt="google_logo" />
			<span class="text-base font-semibold text-black">{m.login_with_google()}</span>
		</Button>
		<div class="flex w-full flex-row gap-2">
			<Button class="w-full rounded-md bg-white p-2">
				<img src={facebook_logo} alt="facebook_logo" />
			</Button>
			<Button class="w-full rounded-md bg-white p-2">
				<img src={twitter_logo} alt="twitter_logo" />
			</Button>
		</div>
	</div>
</section>
