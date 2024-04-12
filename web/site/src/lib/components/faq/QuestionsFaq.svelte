<script lang="ts">
    import type { FAQ } from '$lib/utils/types';

    export let faqs: Array<FAQ> = [];

</script>

<div class="flex flex-col gap-4">
    <span> </span>
        <div class="flex flex-col gap-2 ">
            {#each faqs as faq}
            <div> {faq.question} </div>
            {/each}
        </div>
</div>