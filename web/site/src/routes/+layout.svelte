<script>
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import '../app.pcss';
	import { i18n } from '$lib/config/i18n';
	import Header from '$lib/containers/layout/Header.svelte';
</script>

<ParaglideJS {i18n}>
	<Header />

	<slot />
</ParaglideJS>
