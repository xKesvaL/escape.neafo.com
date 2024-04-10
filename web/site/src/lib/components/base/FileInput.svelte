<svelte:options accessors/>

<script lang="ts">
    import {clsx} from "clsx";
    import {Input} from "$lib/components/ui/input";
    import * as m from '$paraglide/messages';
    import type {ChangeEventHandler} from "svelte/elements";
    import {generateId} from "lucia";

    // base props for use on file input
    let klass: string | undefined = undefined;
    export {klass as class};
    export let multiple: boolean = false;
    export let required: boolean = false;
    export let capture: string | undefined = undefined;
    export let accept: string | undefined = undefined;
    export let attrs: any;

    interface CustomFile {
        file: File;
        base64: string;
        id: string;
    }

    let images: CustomFile[] = [];

    const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
        if (!e.target) {
            return;
        }

        const imagesList = (e.target as HTMLInputElement).files;

</script>

<div class="h-full relative bg-card w-full border rounded-md">
    <Input
            {accept}
            {capture}
            class={clsx("opacity-0 h-0 absolute", klass)}
            {required}
            {multiple}
            on:input
            on:change={handleChange}
            type="file"
            {...attrs}
    />
    <label for="file-input-{id}">
        Input
    </label>
    <!--            bind:instance={root}-->
</div>