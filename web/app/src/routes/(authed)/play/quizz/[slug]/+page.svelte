<script lang="ts">
    import type { PageData } from './$types';
    import {Button} from "$lib/components/ui/button";
    import {IconBulb} from "@tabler/icons-svelte";
    import { confetti } from '@neoconfetti/svelte';
    import {goto} from "$app/navigation";
    import {route} from "$lib/ROUTES";
    import {stats} from "$lib/stores/stats";

    export let data: PageData;

    const { quiz } = data;

    let selectedAnswer: string | null = null;
    let currentQuestion = 0;
    let nextQuestionTimeout: NodeJS.Timeout | null = null;

    const onClickAnswer = (answer: string) => {
        if (nextQuestionTimeout) {
            return;
        }

        selectedAnswer = answer;
    };

    const onClickContinue = () => {
        if (nextQuestionTimeout) {
            clearTimeout(nextQuestionTimeout);
        }
        nextQuestionTimeout = null;

        nextQuestion();
    };

    const onClickValidate = () => {
        if (selectedAnswer && question) {

            if (selectedAnswer === question.correctAnswer) {
                stats.addPoints(100);
            }

            nextQuestionTimeout = setTimeout(() => {
                nextQuestion();
                nextQuestionTimeout = null;
            }, 2500);
        }
    };

    const nextQuestion = async () => {
        if (quiz && currentQuestion >= (quiz.questions.length || 0) - 1) {
            stats.addQuiz(quiz.name);

            await goto(route("/play"));
            return;
        }


        currentQuestion++;
        selectedAnswer = null;
    };

    $: question = quiz?.questions[currentQuestion];
</script>

{#key nextQuestionTimeout}
    {#if nextQuestionTimeout && selectedAnswer === question?.correctAnswer}
        <div use:confetti />
    {/if}
{/key}

{#if quiz}
    <div class="container py-4 flex flex-col gap-4 h-[calc(100dvh-64px)]">
        {#if question}
            <div class="flex flex-col question gap-4">
                <svelte:component this={question.content} />
                <h3 class="text-lg font-bold text-balance">{question.question}</h3>
                <div class="grid grid-cols-2 gap-2">
                    {#each question.answers as answer}
                        <Button class="border-primary border transition h-auto whitespace-normal {selectedAnswer === answer ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'} {nextQuestionTimeout && answer === question.correctAnswer ? 'bg-success text-white hover:bg-destructive hover:text-white border-success' : ''} {selectedAnswer === answer && nextQuestionTimeout && answer !== question.correctAnswer ? 'bg-destructive text-white hover:bg-destructive hover:text-white border-destructive' : ''}" on:click={() => onClickAnswer(answer)}>{answer}</Button>
                    {/each}
                </div>
            </div>
        {/if}
        <!--Show this continue button for impatient people-->

        {#if nextQuestionTimeout}
            <Button on:click={onClickContinue} disabled={!selectedAnswer}>
                {#if currentQuestion + 1 >= (quiz.questions.length || 0) - 1}
                    Finish quiz
                {:else}
                    Continue
                {/if}
            </Button>
        {:else}
            <Button on:click={onClickValidate} disabled={!selectedAnswer}>
                Validate answer
            </Button>
        {/if}
    </div>
{/if}

<style>
    :global(.question picture),
    :global(.question img) {
        height: 420px;
    }
</style>