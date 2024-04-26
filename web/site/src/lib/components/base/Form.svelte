<script lang="ts">
    import SuperDebug, {type SuperFormEvents} from "sveltekit-superforms";
    import type {HTMLFormAttributes} from "svelte/elements";
    import {dev as isDev} from "$app/environment";

    type $$Props = HTMLFormAttributes & {
	enhance: (
            el: HTMLFormElement,
            events?: SuperFormEvents<Record<string, unknown>, any>,
        ) => ReturnType<typeof kitEnhance>;
        formData: SuperFormData<Record<string, unknown>>;
        dev: boolean;
    };

export let enhance: $$Props["enhance"];
export let formData: $$Props["formData"];
export let dev: $$Props["dev"] = isDev;
</script>

<form use:enhance {...$$restProps}>
    <slot />
</form>

{#if dev}
    <div class="max-w-full">
        <SuperDebug data={$formData} />
    </div>
{/if}