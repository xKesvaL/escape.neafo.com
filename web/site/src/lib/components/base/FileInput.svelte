<svelte:options accessors/>

<script lang="ts">
import { clsx } from "clsx";
import { Input } from "$lib/components/ui/input";
import * as m from "$paraglide/messages";
import type { ChangeEventHandler } from "svelte/elements";
import { generateId } from "lucia";
import { fileToBase64 } from "@repo/utils";
import { Button } from "$lib/components/ui/button";
import { IconX } from "@tabler/icons-svelte";
import { fly, scale } from "svelte/transition";
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
let input: HTMLInputElement;

// base props for use on file counter
let klass: string | undefined = undefined;
export { klass as class };
export let required: boolean = false;
export let capture: string | undefined = undefined;
export let accept: string | undefined = undefined;
export let attrs: any;

interface CustomFile {
	file: File;
	base64: string;
	id: string;
}

let image: CustomFile | undefined = undefined;

const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
	if (!e.target) {
		return;
	}

	const imagesList = (e.target as HTMLInputElement).files;

	if (!imagesList) {
		return;
	}

	const file = imagesList[0];

	if (!file) {
		return;
	}

	image = {
		file,
		base64: await fileToBase64(file),
		id: generateId(8),
	} satisfies CustomFile;
	// reset file counter
};

const handleRemoveFile = () => {
	image = undefined;
	input.value = "";
	dispatch("input", {
		currentTarget: input,
	});
};

const handleDrop = async (e: DragEvent) => {
	e.preventDefault();
	e.stopPropagation();

	const files = e.dataTransfer?.files;
	const file = files?.[0];

	if (!file) {
		return;
	}

	image = {
		file,
		base64: await fileToBase64(file),
		id: generateId(8),
	} satisfies CustomFile;
};

const handleDragOver = (e: DragEvent) => {
	e.preventDefault();
	e.stopPropagation();
};
</script>

<div
    class="h-full relative bg-card w-full border rounded-md flex flex-col"
    on:drop={handleDrop}
    on:dragover={handleDragOver}
    role="list"
>
    <Input
            bind:instance={input}
            {accept}
            {capture}
            class={clsx("opacity-0 h-0 absolute", klass)}
            {required}
            on:input
            on:change={handleChange}
            type="file"
            {...attrs}
    />

    <label for={attrs.id} class="px-3 py-6 text-center text-muted-foreground cursor-pointer">
        {@html m.drag_and_drop()}
    </label>
    <div class="flex flex-col gap-4 px-8 pb-8 overflow-y-auto h-full max-h-[590px] custom-scrollbar">
        {#if image}
            <div class="flex p-2 gap-2 relative aspect-video border border-primary isolate rounded-lg overflow-hidden" in:fly={{ y: -20, opacity: 0, duration: 300 }} out:scale={{ opacity: 0, start: 0.9, duration: 300 }}>
                <div class="absolute inset-0 -z-10 isolate">
                    <div class="bg-gradient-to-b from-black/75 from-15% to-transparent to-30% absolute inset-0 z-10"></div>
                    <img src={image.base64} alt={image.file.name} class="object-cover w-full h-full" transition:scale={{ start: 1.05, duration: 400 }} />
                    <div class="bg-gradient-to-b from-black/75 from-15% to-transparent to-30% absolute inset-0 -z-10"></div>
                </div>

                <div class="flex items-center gap-2 h-fit">
                    <Button variant="ghost" size="icon" class="text-foreground rounded-full bg-muted/50 hover:bg-muted h-8 w-8" on:click={handleRemoveFile}>
                        <IconX size={20} stroke="1.5" />
                    </Button>
                    <div class="flex flex-col">
                        <span class="text-foreground text-sm">{image.file.name}</span>
                        <span class="text-muted-foreground text-xs">{Math.round(image.file.size / 1000)} kB</span>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>