<script lang="ts">
    import type {HTMLAttributes} from 'svelte/elements';
    import {cn} from '$lib/utils/ui';
    import {IconDots} from '@tabler/icons-svelte';

    type $$Props = HTMLAttributes<HTMLSpanElement> & {
        el?: HTMLSpanElement;
    };

    export let el: $$Props['el'] = undefined;
    let className: $$Props['class'] = undefined;
    export {className as class};
</script>

<span
        {...$$restProps}
        aria-hidden="true"
        bind:this={el}
        class={cn('flex h-9 w-9 items-center justify-center', className)}
        role="presentation"
>
	<IconDots class="h-4 w-4"/>
	<span class="sr-only">More</span>
</span>
