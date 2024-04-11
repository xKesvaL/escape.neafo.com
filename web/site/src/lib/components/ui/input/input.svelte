<script lang="ts">
    import type {HTMLInputAttributes} from 'svelte/elements';
    import {cn} from '$lib/utils/ui';
    import type {InputEvents} from './index.js';

    type $$Props = HTMLInputAttributes & {
        instance?: HTMLInputElement;
    }
    type $$Events = InputEvents;

    let className: $$Props['class'] = undefined;
    export let value: $$Props['value'] = undefined;
    export let instance: $$Props['instance'] = undefined;
    export {className as class};

</script>

<input
        {...$$restProps}
        bind:value
        bind:this={instance}
        class={cn(
		'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
        on:blur
        on:change
        on:click
        on:focus
        on:focusin
        on:focusout
        on:input
        on:keydown
        on:keypress
        on:keyup
        on:mouseenter
        on:mouseleave
        on:mouseover
        on:paste
/>
