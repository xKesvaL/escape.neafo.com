<script lang="ts">
    import SuperDebug, {type SuperFormEvents} from "sveltekit-superforms";
    import type {HTMLFormAttributes} from "svelte/elements";
    import {dev} from "$app/environment";

    type $$Props = HTMLFormAttributes & {
	enhance: (
		el: HTMLFormElement,
		events?: SuperFormEvents<Record<string, unknown>, any>,
	) => ReturnType<typeof kitEnhance>;
	formData: SuperFormData<Record<string, unknown>>;
};

export let enhance: $$Props["enhance"];
export let formData: $$Props["formData"];
</script>

<form use:enhance {...$$restProps}>
    <slot />
</form>

{#if dev}
    <SuperDebug data={$formData} />
{/if}