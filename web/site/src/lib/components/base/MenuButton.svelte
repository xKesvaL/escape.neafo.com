<script lang="ts">

    import {page} from "$app/stores";
    import {Button} from "$lib/components/ui/button";
    import type {ComponentType} from "svelte";

    export let icon: ComponentType;
    export let href: string;
    export let startsWith = false;

    $: active = startsWith ? $page.url.pathname.startsWith(href) : $page.url.pathname === href;
</script>

<Button
        class="gap-2 font-normal justify-start transition hover:bg-muted hover:text-foreground {active ? 'bg-muted text-foreground' : 'text-muted-foreground'}"
        {href}
        variant="ghost"
>
    <svelte:component stroke="1.5" this={icon}/>
    <slot/>
</Button>