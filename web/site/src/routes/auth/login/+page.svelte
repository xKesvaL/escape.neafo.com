<script lang="ts">
import {
	Button,
	Control,
	Field,
	FieldErrors,
	Label,
} from "$lib/components/ui/form";
import { Input } from "$lib/components/ui/input";
import { userRegisterZodSchema } from "@repo/schemas/zod";
import { superForm } from "sveltekit-superforms";
import { zodClient } from "sveltekit-superforms/adapters";

export let data;

const form = superForm(data.form, {
	validators: zodClient(userRegisterZodSchema),
});

const { form: formData, enhance } = form;
</script>

<section class="container">
    <form method="POST" use:enhance>
        <Field {form} name="email">
            <Control let:attrs>
                <Label>Email</Label>
                <Input {...attrs} bind:value={$formData.email}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Field {form} name="password">
            <Control let:attrs>
                <Label>Password</Label>
                <Input {...attrs} bind:value={$formData.password}/>
            </Control>
            <FieldErrors/>
        </Field>
        <Button>Submit</Button>
    </form>
</section>
