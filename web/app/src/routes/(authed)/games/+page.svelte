<script lang="ts">
    import { route } from '$lib/ROUTES';
    import {differences} from "$lib/config/differences";
    import {quizzes} from "$lib/config/quizz";
    import {spots} from "$lib/config/spots";
    import {Button} from "$lib/components/ui/button";
</script>

<h2 class="text-2xl font-bold">Differences</h2>
{#each differences as diff}
    <Button class="mx-2" href={route("/play/differences/[slug]", { slug: diff.name })}>
        {diff.name}
    </Button>
{/each}

<h2 class="text-2xl font-bold">Quizzes</h2>
{#each quizzes as quiz}
    <Button class="mx-2" href={route("/play/quizz/[slug]", { slug: quiz.name })}>
        {quiz.name}
    </Button>
{/each}

<h2 class="text-2xl font-bold">Spots</h2>
{#each spots as spot}
    <Button class="mx-2" href={route("/play/album/new/[slug]", { slug: spot.slug })}>
        {spot.name}
    </Button>
{/each}