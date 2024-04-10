<svelte:options accessors/>

<script lang="ts">
    import {clsx} from "clsx";
    import {Input} from "$lib/components/ui/input";
    import {generateId} from "lucia";

    // base props for use on file input
    let klass: string | undefined = undefined;
    export {klass as class};
    export let multiple: boolean = true;
    export let required: boolean = true;
    export let capture: string | undefined = undefined;
    export let accept: string | undefined = undefined;
    export let attrs: any;
    export let id: string = generateId(8);

</script>

<div class="h-full relative bg-card w-full border rounded-md">
    <Input
            {...attrs}
            {accept}
            {capture}
            class={clsx("opacity-0 h-0 absolute", klass)}
            id="file-input-{id}"
            {required}
            {multiple}
            on:input
            type="file"
    />
    <label for="file-input-{id}">
        Input
    </label>
    <!--            bind:instance={root}-->
</div>