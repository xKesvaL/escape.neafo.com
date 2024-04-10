<script lang="ts">
    import {Field, Control, Label, FieldErrors, Button} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
    import {userRegisterZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';
    import google_logo from 'site/src/assets/auth/google_logo.svg';
    import facebook_logo from 'site/src/assets/auth/facebook_logo.svg';
    import twitter_logo from 'site/src/assets/auth/twitter_logo.svg';
    import hand from'site/src/assets/auth/hand.svg';
    import login_img from'site/src/assets/auth/login_img.png';
   
  
  
    

    const {data} = $props();


    const form = superForm(data.form, {
        validators: zodClient(userRegisterZodSchema)
    });

    const {form: formData, enhance} = form;

    
</script>

<section class="flex flex-row py-4">
<div class="w-[120%] h-[100%]">
    <img src={login_img} alt="login_img">
</div>
<section class="container flex flex-col items-center justify-center text-center gap-2 py-8 ">
  
    <div class="flex flex-row items-center gap-2">
        <img src={hand} alt="hand">
        <h1 class="text-5xl font-bold py-2">Welcome back</h1>
    </div>
    <form method="POST" class=" w-2/3" use:enhance>
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
        <Button class="bg-gradient-to-r from-orange-500 to-primary w-full text-2xl font-medium py-2 text-center my-2 mt-4">Login</Button>
        <div class="mt-10">
            <div class="flex justify-center items-center self-stretch border-t-2 border-muted-foreground">
                <span class="bg-background relative -top-5 px-4 text-muted-foreground my-2">OR</span>
            </div>
        </div>

        <div class="flex flex-row gap-2">
            <div class="bg-white w-full justify-center p-2 rounded-md flex flex-row items-center text-center gap-1">
            <img src={google_logo} alt="google_logo">
            <span class="text-black font-semibold text-base">Login with Google</span>
            </div>
            <div class="bg-white w-fit p-2 rounded-md">
                <img src={facebook_logo} alt="facebook_logo">
            </div>
            <div class="bg-white w-fit p-2 rounded-md">
                <img src={twitter_logo} alt="twitter_logo">
            </div>
        </div>
    </form>
</section>
</section>