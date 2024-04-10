<svelte:options accessors/>

<script lang="ts">
    import {clsx} from "clsx";
    import {Input} from "$lib/components/ui/input";
    import {generateId} from "lucia";
    import * as m from '$paraglide/messages';
    import {fileToBase64} from "@repo/utils";
    import {createEventDispatcher} from "svelte";
    import {IconX} from "@tabler/icons-svelte";
    import {Button} from "$lib/components/ui/button";
    import {fly, scale} from 'svelte/transition';

    const dispatcher = createEventDispatcher();

    interface CustomImage {
        file: File;
        base64: string;
        id: string;
    }

    // base props for use on file input
    let klass: string | undefined = undefined;
    export {klass as class};
    export let multiple: boolean = true;
    export let required: boolean = true;
    export let capture: string | undefined = undefined;
    export let accept: string | undefined = undefined;
    export let attrs: any;
    export let id: string = generateId(8);

    const handleOnDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e);
    };

    const handleOnDragover = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    let images: CustomImage[] = [];

    const handleChange = async (e) => {
        const imagesList = e.target.files;
        images = [
            ...images,
            ...(await Promise.all(Array
                    .from(imagesList)
                    .map(async file => ({
                        file,
                        base64: await fileToBase64(file),
                        id: generateId(8)
                    }))
                ))
        ];
        console.log(images);
        e.target.value = null;
    };



</script>

<div
        class="h-full relative bg-card w-full border rounded-md flex flex-col"
        on:drop={handleOnDrop}
        on:dragover={handleOnDragover}
>
    <Input
            {...attrs}
            {accept}
            {capture}
            class={clsx("opacity-0 h-0 absolute", klass)}
            id="file-input-{id}"
            {required}
            {multiple}
            on:input
            on:change={handleChange}
            type="file"
    />
    <label for="file-input-{id}" class="px-3 py-6 text-center cursor-pointer text-foreground/75">
        {@html m.drag_and_drop()}
    </label>
    <div class="flex flex-col gap-4 px-8 pb-8 overflow-y-scroll h-full">
        {#each images as image (image.id)}
            <div class="flex p-2 gap-2 relative h-56 border border-primary isolate rounded-lg overflow-auto" in:fly={{ y: -20, opacity: 0, duration: 300 }} out:scale={{ opacity: 0, start: 0.9, duration: 300 }}>
                <div class="absolute inset-0 -z-10 isolate">
                    <div class="bg-gradient-to-b from-black/75 from-15% to-transparent to-30% absolute inset-0 z-10"></div>
                    <img src={image.base64} alt={image.file.name} class="object-cover w-full h-full" transition:scale={{ start: 1.05, duration: 400 }} />
                    <div class="bg-gradient-to-b from-black/75 from-15% to-transparent to-30% absolute inset-0 -z-10"></div>
                </div>

                <div class="flex items-center gap-2 h-fit">
                    <Button variant="ghost" size="icon" class="text-foreground rounded-full bg-muted/50 hover:bg-muted h-8 w-8" on:click={() => images = images.filter(i => i.id !== image.id)}>
                        <IconX size={20} stroke="1.5" />
                    </Button>
                    <div class="flex flex-col">
                        <span class="text-foreground text-sm">{image.file.name}</span>
                        <span class="text-muted-foreground text-xs">{Math.round(image.file.size / 1000)} kB</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>