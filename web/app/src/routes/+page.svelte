<script lang="ts">
import { Button } from "$lib/components/ui/button/index.js";
import {IconArrowUpRight} from "@tabler/icons-svelte";
import {route} from "$lib/ROUTES";
import { ALLOW_GUESTS_APP } from "@repo/global-config";
</script>

<div class="flex flex-col justify-between p-8 h-dvh relative">
    <div class="absolute inset-0 -z-10 isolate">
        <div class="absolute inset-0 bg-black opacity-75">

        </div>
        <enhanced:img src="$assets/background.png" alt="Background" class="object-cover h-full w-full" />
    </div>

    <div class="text-center flex flex-col gap-2">
        <p class="text-lg text-primary">
            Welcome to Kaiserstuhl escape
        </p>
        <h1 class="text-4xl font-black">
            Let's unlock your adventure!
        </h1>
    </div>

    <div class="flex flex-col gap-4">
        {#if ALLOW_GUESTS_APP}
            <Button class="rounded-full bg-purple-800 w-full" href={route('/home')}>
                Guest (MMI)
            </Button>
        {/if}
        <Button class="rounded-full w-full" href={route('/login')}>
            Login
        </Button>
        <Button variant="secondary" class="rounded-full w-full gap-2" href="https://escape.kesval.com">
            Book an escape game <IconArrowUpRight stroke="1.5" />
        </Button>
    </div>
</div>