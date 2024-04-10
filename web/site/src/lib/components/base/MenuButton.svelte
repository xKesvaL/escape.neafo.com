<script lang="ts">

    import {page} from "$app/stores";
    import {Button} from "$lib/components/ui/button";
    import type {SvelteComponent} from "svelte";

    export let icon: SvelteComponent;
    export let href: string;
</script>

<Button
        class="gap-2 font-normal justify-start transition hover:bg-muted hover:text-foreground {$page.url.pathname === href ? 'bg-muted text-foreground' : 'text-muted-foreground'}"
        {href}
        variant="ghost"
>
    <svelte:component stroke="1.5" this={icon}/>
    <slot/>
</Button>