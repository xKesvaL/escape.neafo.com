<script lang="ts">
    import type {HTMLInputAttributes} from "svelte/elements";
    import {cn} from "$lib/utils/ui";
    import type {InputEvents} from "./index.js";
    import {IconMinus, IconPlus, IconUsers} from "@tabler/icons-svelte";


    type $$Props = HTMLInputAttributes & {
	instance?: HTMLInputElement;
    value?: number;
    max?: number;
    min?: number;
};
type $$Events = InputEvents;

let className: $$Props["class"] = undefined;

export let max: $$Props['max'] = 6;
export let min: $$Props['min'] = 1;
export let value: $$Props["value"] = min || 1;
export let instance: $$Props["instance"] = undefined;
export { className as class };

function handleMinus(){
    value -= 1;
}

function handlePlus(){
    value += 1;
}

</script>

<div class="relative flex items-center gap-2 border-input border px-3 rounded-md bg-background">
    <IconUsers/>
    <input
            {...$$restProps}
            bind:value
            bind:this={instance}
            class={cn(
            'bg-background focus-visible:outline-none ring-offset-background placeholder:text-muted-foreground flex h-10 w-full px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50',
            className)}
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
    <div class="flex flex-row gap-2 absolute right-2">
        <button type="button" class="rounded-full transition border p-1 {value <= (min || 0) ? 'border-muted' : 'border-muted-foreground cursor-pointer'}" on:click={handleMinus} disabled={value <= (min || 0)}><IconMinus size={16} stroke="1.5"/></button>
        <button type="button" class="rounded-full transition border p-1 {value >= (max || 6) ? 'border-muted' : 'border-muted-foreground cursor-pointer'}" on:click={handlePlus} disabled={value >= (max || 6)}><IconPlus size={16} stroke="1.5"/></button>
    </div>
</div>
