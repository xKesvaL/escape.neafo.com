<script lang="ts">
    import type { LegalProps } from '$lib/utils/types';

    export let conditions: Array<LegalProps> = [];

    export let title: string;    

    export let update: string;    

</script>

<section class="container flex flex-row">
    <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-extrabold">{title}</h1>
        <span class="text-lg text-muted-foreground">{update}</span>
            <div class="flex flex-col gap-4 ">
                {#each conditions as condition}
                    <span class="text-white font-semibold text-3xl pb-2">{condition.title}</span>
                    <div class="text-base font-normal"> {condition.description} </div>
                {/each}
            </div>
    </div>

    <div class="flex flex-col gap-3 p-3">
        {#each conditions as condition}
            <span>{condition.title}</span>
        {/each}
    </div>

</section>