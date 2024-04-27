<script lang="ts">
    import LegalContainer from "$lib/containers/legal/LegalContainer.svelte";
    import * as m from "$paraglide/messages";
    import type { LegalProps } from '$lib/utils/types';

    
    const policy = [
        {
            title: m.policy_title_condition(),
            description: m.policy_description_condition()
        },
        {
            title: m.policy_title_collect(),
            description: m.policy_description_collect()
        },
        {
            title: m.policy_title_property(),
            description: m.policy_description_property()
        },
     
        {
            title: m.policy_title_link(),
            description: m.policy_description_link()
        },

      
     
        ] satisfies Array<LegalProps> 
</script>

<div>
    <LegalContainer conditions={policy} title={m.policy_legal_title()} update={m.policy_legal_update()}/>
</div>