<script lang="ts">
    import {Button, Control, Field, FieldErrors, Label} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
    import {userRegisterZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';
    import hand from'site/src/assets/auth/hand.svg';

    import google_logo from 'site/src/assets/auth/google_logo.svg';
    import facebook_logo from 'site/src/assets/auth/facebook_logo.svg';
    import twitter_logo from 'site/src/assets/auth/twitter_logo.svg';


    export let data;

    const form = superForm(data.form, {
        validators: zodClient(userRegisterZodSchema)
    });

    const {form: formData, enhance} = form;
</script>




<div class="flex flex-row items-center gap-2">
    <img src={hand} alt="hand">
    <h1 class="text-5xl font-bold">Join us now   </h1>
</div>
<form method="POST" class="flex flex-col gap-4 max-w-xl" use:enhance>
    <Field {form} class="text-start " name="email">
        <Control let:attrs>
            <Label class="text-lg">Email</Label>
            <Input class="bg-white font-black" {...attrs} bind:value={$formData.email} placeholder="email@gmail.com"/>
        </Control>
        <FieldErrors/>
    </Field>
    <Field {form} class="text-start" name="password">
        <Control let:attrs>
            <Label class="text-lg">Password</Label>
            <Input class="bg-white font-black" {...attrs} bind:value={$formData.password} placeholder="Coolpassword123"/>
        </Control>
        <FieldErrors/>
    </Field>
    <a href="/">
        <p class="text-muted-foreground underline text-end">Forgot your password ?</p>
    </a>
    <Button class="bg-gradient-to-r from-orange-500 to-primary w-full text-2xl font-medium py-2 text-center my-2 mt-4">Register</Button>

    <div class="flex flex-row gap-2">
        <Button class="bg-white w-full justify-center p-2 rounded-md flex flex-row items-center text-center gap-1">
        <img src={google_logo} alt="google_logo">
        <span class="text-black font-semibold text-base">Register with Google</span>
        </Button>
        <Button class="bg-white w-fit p-2 rounded-md">
            <img src={facebook_logo} alt="facebook_logo">
        </Button>
        <Button class="bg-white w-fit p-2 rounded-md">
            <img src={twitter_logo} alt="twitter_logo">
        </Button>
    </div> 


</form>