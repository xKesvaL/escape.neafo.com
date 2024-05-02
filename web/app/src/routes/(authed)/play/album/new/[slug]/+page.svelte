<script lang="ts">
    import {onMount} from "svelte";
    import {Button} from "$lib/components/ui/button";
    import {IconCheck, IconX} from "@tabler/icons-svelte";
    import {route} from "$lib/ROUTES";
    import {goto} from "$app/navigation";
    import {stats} from "$lib/stores/stats";

    export let data;

    const { slug } = data;

    let videoSource: HTMLVideoElement | null = null;
    let canvas: HTMLCanvasElement | null = null;
    let image: string | null = null;
    let file: File | null = null;

    const getVideoCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: {
                        min: 720,
                        ideal: 1080,
                        max: 1920,
                    },
                    height: {
                        min: 720,
                        ideal: 1920,
                        max: 1920,
                    },
                    facingMode: "environment",
                }
            });

            if (!videoSource || !canvas) {
                return;
            }
            videoSource.srcObject = stream;
            await videoSource.play();

            canvas.width = videoSource.videoWidth;
            canvas.height = videoSource.videoHeight;
        } catch (error) {
            console.log(error);
        }
    };

    const takePicture = async () => {
        if (!canvas || !videoSource) {
            return;
        }
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.drawImage(videoSource, 0, 0, canvas.width, canvas.height);
        image = canvas.toDataURL("image/png");
        canvas.toBlob(async (blob) => {
            if (!blob) {
                return;
            }

            file = new File([blob], "image.png", {
                type: "image/png",
            });

        });

    };

    const dumpPicture = () => {
        image = null;
    };

    const sendPicture = async () => {
        const formData = new FormData();
        if (!file) {
            return;
        }

        formData.append("image", file);

        await fetch(route("default /play/album/new/[slug]", { slug: slug }), {
            method: "POST",
            body: formData,
        });

        stats.addSpots(slug);

        await goto(route("/play/album"));
    };

    onMount(() => {
        getVideoCamera();
    });
</script>

<div class="h-full relative">
    <input
        type="hidden"
        name="image"
        bind:value={file}
    />
    <!-- svelte-ignore a11y-media-has-caption -->
    <video class="h-full" bind:this={videoSource} />
    {#if image}
        <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src={image} alt="" />
        </div>
        <div class="absolute bottom-4 left-0 right-0 flex gap-4 items-center justify-center">
            <Button
                    class="border-2 border-destructive bg-destructive/25 text-destructive outline hover:bg-destructive/40 w-16 h-16 rounded-full p-2"
                    size="icon"
                    on:click={dumpPicture}
            >
                <IconX size={32} />
            </Button>
            <Button
                    class="border-2 border-success bg-success/25 text-success outline hover:bg-success/40 w-16 h-16 rounded-full p-2"
                    size="icon"
                    on:click={sendPicture}
            >
                <IconCheck size={32} />
            </Button>
        </div>
    {:else}
        <Button
                class="border-2 border-destructive bg-transparent outline hover:bg-transparent w-16 h-16 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full p-2"
                size="icon"
                on:click={takePicture}
        >
            <div class="w-full h-full bg-destructive rounded-full"></div>
        </Button>
    {/if}

</div>
<canvas class="hidden" bind:this={canvas}></canvas>