<script lang="ts">
    import {Button, Control, Field, FieldErrors, Label} from '$lib/components/ui/form';
    import {Input} from '$lib/components/ui/input';
    import {userEditZodSchema} from '@repo/schemas/zod';
    import {superForm} from 'sveltekit-superforms';
    import {zodClient} from 'sveltekit-superforms/adapters';

    export let data;

    const user = data.user;
    
    const form = superForm(data.form, {
        validators: zodClient(userEditZodSchema)
    });

    const {form: formData, enhance} = form;
</script>

<section class="container">
    {#if user}
    <form method="POST" use:enhance>
        <Field {form} name="email">
            <Control let:attrs>
                <Label>Email</Label>
                <Input {...attrs} bind:value={$formData.email} />
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="firstname">
            <Control let:attrs>
                <Label>firstname</Label>
                <Input {...attrs} bind:value={$formData.firstname} />
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="lastname">
            <Control let:attrs>
                <Label>lastname</Label>
                <Input {...attrs} bind:value={$formData.lastname} />
            </Control>
            <FieldErrors/>
        </Field>
        <Button>Submit</Button>
    </form>

    {:else}
    <p>Y'a pas d'utilisateur fait pas chier</p>
    {/if}
</section>
