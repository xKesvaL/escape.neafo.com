<script lang="ts">
        import type { LegalProps } from '$lib/utils/types';

        export let conditions: Array<LegalProps> = [];
</script>


<div class="sticky top-20 flex flex-col gap-3 p-3 max-w-80 w-full">
    {#each conditions as condition}
    <a class="hover:text-primary" href=#{condition.title}>{condition.title} </a>
    {/each}
</div>