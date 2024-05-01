<script lang="ts">
	import { Button, Control, Field, FieldErrors, Label } from '$lib/components/ui/form';
	import { Button as NormalButton } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { userRegisterZodSchema } from '@repo/schemas/zod';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import hand from '$assets/auth/hand.svg';
	import google_logo from '$assets/auth/google_logo.svg';
	import facebook_logo from '$assets/auth/facebook_logo.svg';
	import twitter_logo from '$assets/auth/twitter_logo.svg';
	import * as m from '$paraglide/messages';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(userRegisterZodSchema)
	});

	const { form: formData, enhance } = form;

</script>

<section class="mt-4 flex flex-col gap-4 md:mt-0 w-full">
	<div class="flex flex-row items-center gap-2 justify-start">
		<img src={hand} alt="hand" />
		<h1 class="text-3xl font-bold md:text-4xl">{m.join_us()}</h1>
	</div>
	<form method="POST" use:enhance class="flex flex-col gap-4 w-full">
		<Field {form} name="email">
			<Control let:attrs>
				<Label class="flex">{m.email()}</Label>
				<Input {...attrs} bind:value={$formData.email} placeholder="email@example.com" />
			</Control>
			<FieldErrors />
		</Field>
		<Field {form} name="password">
			<Control let:attrs>
				<Label class="flex">{m.password()}</Label>
				<Input {...attrs} bind:value={$formData.password} placeholder="Coolpass123" />
			</Control>
			<FieldErrors />
		</Field>
		<div class="grid grid-cols-[1fr,1fr,64px] gap-4">
			<Field {form} name="firstname">
				<Control let:attrs>
					<Label class="flex">{m.firstname()}</Label>
					<Input {...attrs} bind:value={$formData.firstname} placeholder="First name" />
				</Control>
				<FieldErrors />
			</Field>
			<Field {form} name="lastname">
				<Control let:attrs>
					<Label class="flex">{m.name()}</Label>
					<Input {...attrs} bind:value={$formData.lastname} placeholder="Last name" />
				</Control>
				<FieldErrors />
			</Field>
			<Field {form} name="age">
				<Control let:attrs>
					<Label class="flex">{m.age()}</Label>
					<Input {...attrs} bind:value={$formData.age} placeholder="Age" />
				</Control>
				<FieldErrors />
			</Field>
		</div>
		<Button
			class="to-primary my-2 mt-4 w-full bg-gradient-to-r from-orange-500 py-2 text-center text-lg font-medium"
			>{m.register()}</Button
		>
	</form>
<!--	<a href="/">-->
<!--		<p class="text-muted-foreground text-end underline">{m.forgot_password()}</p>-->
<!--	</a>-->

<!--	<div class="flex flex-row flex-wrap gap-2">-->
<!--		<Button-->
<!--			class="flex w-full flex-row items-center justify-center gap-1 rounded-md bg-white p-2 text-center"-->
<!--		>-->
<!--			<img src={google_logo} alt="google_logo" />-->
<!--			<span class="text-base font-semibold text-black">{m.login_with_google()}</span>-->
<!--		</Button>-->
<!--		<div class="flex w-full flex-row gap-2">-->
<!--			<Button class="w-full rounded-md bg-white p-2">-->
<!--				<img src={facebook_logo} alt="facebook_logo" />-->
<!--			</Button>-->
<!--			<Button class="w-full rounded-md bg-white p-2">-->
<!--				<img src={twitter_logo} alt="twitter_logo" />-->
<!--			</Button>-->
<!--		</div>-->
<!--	</div>-->
</section>
