<script lang="ts">
    import type { FAQ } from '$lib/utils/types';

    export let faqs: Array<FAQ> = [];

    export let  title:string;    

</script>

<div class="flex flex-col gap-4 max-w-52">
        <div class="flex flex-col gap-2 ">
            <span class="text-white border-b-white border-b-[1px] pb-2">{title}</span>
            {#each faqs as faq}
            <div class="text-muted-foreground cursor-pointer hover:underline"> {faq.question} </div>
            {/each}
        </div>
</div>