<script lang="ts">
    import {ParaglideJS} from "@inlang/paraglide-sveltekit";
    import "../app.pcss";
    import {i18n} from "$lib/config/i18n";
    import {setupViewTransition} from "sveltekit-view-transition";

    setupViewTransition();
</script>

<ParaglideJS {i18n}>
	<slot/>
</ParaglideJS>
