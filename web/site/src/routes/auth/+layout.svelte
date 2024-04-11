<script lang='ts'>
    import * as Tabs from "$lib/components/ui/tabs";
    import { goto } from '$app/navigation';
	import { route } from '$lib/ROUTES.js';
</script>

<section class="grid grid-cols-[3fr,2fr] gap-8 container p-8">
    <div class="">
        <enhanced:img class="w-full h-full" src="$assets/auth/login_img.png" alt="login_img">
    </div>
    <div class="flex flex-col items-center text-center gap-4">
        <Tabs.Root value="account">
            <Tabs.List class="p-2 h-auto gap-2 min-w-52 bg-muted/75 backdrop-blur-xl backdrop-saturate-150">
                <Tabs.Trigger class="px-4 py-3 flex-1" on:click={() => goto(route("/auth/login"))}  value="password">Login</Tabs.Trigger>  
                
                <Tabs.Trigger class="px-4 py-3 flex-1" on:click={() => goto(route("/auth/register"))} value="account">Register</Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>   

        <div class="">
            <slot />
        </div>
    </div>
</section>
