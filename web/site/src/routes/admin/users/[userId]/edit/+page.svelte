<script lang="ts">
    import {Field, Control, Label, FieldErrors, Button} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
	import { userZodSchema } from '@repo/schemas/zod';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

    const {data} = $props();

    const user = data.user
    
    const form = superForm(data.form, {
        validators: zodClient(userZodSchema)
    });

    const {form: formData, enhance} = form;
</script>

<section class="container">
    {#if user}
    <form method="POST" use:enhance>
        <Field {form} name="email">
            <Control let:attrs>
                <Label>Email</Label>
                <Input {...attrs} bind:value={$formData.email} placeholder={user.email}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button>Submit</Button>
    </form>
    {:else}
    <p>Y'a pas d'utilisateur fait pas chier</p>
    {/if}
</section>
