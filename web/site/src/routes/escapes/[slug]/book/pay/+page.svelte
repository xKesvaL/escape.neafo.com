<script lang="ts">
    import type { PageServerData } from './$types';
    import {formatPrice} from "@repo/utils";
    import {Label} from "$lib/components/ui/label";
    import {Input} from "$lib/components/ui/input";
    import {Button} from "$lib/components/ui/button";
    import { confetti } from '@neoconfetti/svelte';
    import {IconCircleCheck} from "@tabler/icons-svelte";
    import {goto} from "$app/navigation";

    export let data: PageServerData;

    const { escape } = data;

    let isPayed = false;
</script>

<div class="w-full grid lg:grid-cols-2 h-[calc(100dvh-80px)]">
    <div class="hidden lg:flex flex-col justify-center items-center">
        <div class="flex flex-col gap-8 ">
            <enhanced:img src="$assets/logo.png?w=300" alt="Logo" />
            <div class="flex flex-col gap-2">
                <h2 class="text-muted-foreground text-lg">
                    {escape.name}
                </h2>
                <p class="text-6xl font-bold">
                    {formatPrice(escape.price)}€
                </p>
            </div>
            <img class="w-[400px] h-[280px] object-cover" src={escape?.image.data} alt={escape.name} />
        </div>
    </div>
    <div class="bg-muted flex flex-col justify-center items-center">
        <div class="flex flex-col gap-4 w-full max-w-sm">
            {#if isPayed}
                <div use:confetti />
                <div class="text-primary">
                    <IconCircleCheck size={96} stroke="1.5" />
                </div>
                <h2 class="text-4xl">
                    Payment received!
                </h2>
            {:else}
                <div>
                    <Label>
                        Card number
                    </Label>
                    <Input placeholder="1234 1234 1234 1234" />
                </div>
                <div class="flex gap-4">
                    <div>
                        <Label>
                            Expiry
                        </Label>
                        <Input placeholder="MM / YY" />
                    </div>
                    <div>
                        <Label>
                            CVC
                        </Label>
                        <Input placeholder="CVC" />
                    </div>
                </div>
                <Button on:click={() => {
                    isPayed = true;
                    setTimeout(async () => {
                        await goto("/");
                    }, 3000)
                }}>
                    Pay
                </Button>
            {/if}
        </div>
    </div>
</div>