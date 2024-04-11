<script>
import { ParaglideJS } from "@inlang/paraglide-js-adapter-sveltekit";
import "../app.pcss";
import { i18n } from "$lib/config/i18n";
</script>

<ParaglideJS {i18n}>
	<slot />
</ParaglideJS>
