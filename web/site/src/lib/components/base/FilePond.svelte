<svelte:options accessors/>

<script lang="ts">
    import {afterUpdate, onDestroy} from "svelte";
    import * as FilePond from "filepond";
    import {clsx} from "clsx";

    export const registerPlugin = FilePond.registerPlugin;

    // is FilePond supported
    export const isSupported = FilePond.supported();

    // private props, root element + active instance of FilePond
    let root;
    let instance;

    // base props for use on file input
    let klass = undefined;
    export {klass as class};
    export let id: string | undefined = undefined;
    export let name: string | undefined = undefined;
    export let allowMultiple: boolean = true;
    export let required: boolean = true;
    export let captureMethod = undefined;
    export let acceptedFileTypes: string | undefined = undefined;
    export let files: File[] = [];

    // placeholder fn for methods
    const noop = () => {
    };

    // functions to call on this component (if it's initialised)
    export let addFile = noop;
    export let addFiles = noop;
    export let browse = noop;
    export let fireSync = noop;
    export let getFile = noop;
    export let getFiles = noop;
    export let moveFile = noop;
    export let prepareFile = noop;
    export let prepareFiles = noop;
    export let processFile = noop;
    export let processFiles = noop;
    export let removeFile = noop;
    export let removeFiles = noop;
    export let sort = noop;

    // this lifecycle method will handle updating and creating the FilePond instance
    afterUpdate(() => {
        if (!isSupported) {
            return;
        }
        if (!instance) {
            // create instance
            instance = FilePond.create(root, {...$$props});

            // Reference pond methods to FilePond component instance
            addFile = instance.addFile;
            addFiles = instance.addFiles;
            removeFile = instance.removeFile;
            removeFiles = instance.removeFiles;
            browse = instance.browse;
            fireSync = instance.fireSync;
            getFile = instance.getFile;
            getFiles = instance.getFiles;
            moveFile = instance.moveFile;
            prepareFile = instance.prepareFile;
            prepareFiles = instance.prepareFiles;
            processFile = instance.processFile;
            processFiles = instance.processFiles;
            sort = instance.sort;
        } else {
            instance.setOptions($$props);
        }
    });

    // cleans up the component
    onDestroy(() => {
        if (!instance) {
            return;
        }
        instance.destroy();
        instance = undefined;
    });

    $: console.log(files)
</script>

<div class="filepond--wrapper h-full">
    <input
            accept={acceptedFileTypes}
            bind:files
            bind:this={root}
            capture={captureMethod}
            class={clsx("h-full", klass)}
            {id}
            multiple={allowMultiple}
            {name}
            {required}
            type="file"
    />
</div>