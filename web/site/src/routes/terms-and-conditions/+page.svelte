<script lang="ts">
    import LegalContainer from "$lib/containers/legal/LegalContainer.svelte";
    import * as m from "$paraglide/messages";
    import type { LegalProps } from '$lib/utils/types';

    
    const conditions = [
        {
            title: m.terms_title_condition(),
            description: m.terms_description_condition()
        },
        {
            title: m.terms_title_collect(),
            description: m.terms_description_collect()
        },
        {
            title: m.terms_title_property(),
            description: m.terms_description_property()
        },

        {
            title: m.terms_title_link(),
            description: m.terms_description_link()
        },


     
        ] satisfies Array<LegalProps> 
</script>

<div>
    <LegalContainer conditions={conditions} title={m.terms_legal_title()} update={m.terms_legal_update()}/>
</div>
