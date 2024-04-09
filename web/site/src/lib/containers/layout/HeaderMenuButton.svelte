<script lang="ts">

    import {page} from "$app/stores";
    import {Button} from "$lib/components/ui/button";
    import type {SvelteComponent} from "svelte";

    interface Props {
        icon: SvelteComponent;
        href: string;
    }

    const {href, icon}: Props = $props();
</script>

<Button
        class="gap-2 font-normal justify-start hover:bg-muted {$page.url.pathname === href ? 'bg-muted' : ''}"
        {href}
        variant="ghost"
>
    <svelte:component stroke="1.5" this={icon}/>
    <slot/>
</Button>