<script lang="ts">
    import type { LegalProps } from '$lib/utils/types';
    import LegalNav from '$lib/components/legal/LegalNav.svelte'

    
    export let conditions: Array<LegalProps> = [];

    export let title: string;    

    export let update: string;    

</script>

<section class="container flex flex-row items-start gap-4 self-start">
    <div class="flex flex-col gap-4">
        <h1 class="text-5xl font-extrabold">{title}</h1>
        <span class="text-lg text-muted-foreground">{update}</span>
            <div class="flex flex-col gap-12 ">
                {#each conditions as condition}
                <div class="flex flex-col gap-4">
                    <span id={condition.title} class="text-white font-semibold text-3xl pb-2">{condition.title}</span>
                    <div class="text-base font-normal"> {@html condition.description} </div>
                </div>
                {/each}
            </div>
    </div>


    <LegalNav conditions={conditions}/>

</section>
