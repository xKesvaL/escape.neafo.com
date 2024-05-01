<script lang="ts">
    import LegalContainer from "$lib/containers/legal/LegalContainer.svelte";
    import * as m from "$paraglide/messages";
    import type { LegalProps } from '$lib/utils/types';

    
    const conditions = [
        {
            title: m.terms_title_use(),
            description: m.terms_description_use()
        },
        {
            title: m.terms_title_content(),
            description: m.terms_description_content()
        },
        {
            title: m.terms_title_reservation(),
            description: m.terms_description_reservation()
        },

        {
            title: m.terms_title_limitation(),
            description: m.terms_description_limitation()
        },
        {
            title: m.terms_title_modification(),
            description: m.terms_description_modification()
        },


     
        ] satisfies Array<LegalProps> 
</script>

<div>
    <LegalContainer conditions={conditions} title={m.terms_legal_title()} update={m.terms_legal_update()}/>
</div>
