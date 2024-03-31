<script lang="ts">
    import {ParaglideJS} from '@inlang/paraglide-js-adapter-sveltekit';
    import '../app.pcss';
    import {i18n} from '$lib/config/i18n';
    import Header from '$lib/containers/layout/Header.svelte';
    import Footer from '$lib/containers/layout/Footer.svelte';
    import {setupViewTransition} from 'sveltekit-view-transition';

    const {data} = $props();

    setupViewTransition();

</script>

<ParaglideJS {i18n}>
    <Header/>

    <slot/>

    <Footer/>
</ParaglideJS>
