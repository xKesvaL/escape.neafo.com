<script lang="ts">
    import type { PageData } from './$types';
    import {Button} from "$lib/components/ui/button";
    import {IconBulb} from "@tabler/icons-svelte";

    export let data: PageData;

    const { quiz } = data;

    let selectedAnswer: string | null = null;
    let currentQuestion = 0;
    let nextQuestionTimeout: NodeJS.Timeout | null = null;

    const onClickAnswer = (answer: string) => {
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
                // do something (neoconfetti-svelte?)
            } else {
                // show correct answer
            }

            nextQuestionTimeout = setTimeout(() => {
                nextQuestion();
            }, 2500);
        }
    };

    const nextQuestion = () => {
        currentQuestion++;
        selectedAnswer = null;
    };

    $: question = quiz?.questions[currentQuestion];
</script>

{#if quiz}
    <div class="container py-4 flex flex-col gap-4">
        {#if question}
            <div class="flex flex-col">
                <svelte:component this={question.content} />
                <h3>{question.question}</h3>
                <div class="grid grid-cols-2 gap-2">
                    {#each question.answers as answer}
                        <Button on:click={() => onClickAnswer(answer)}>{answer}</Button>
                    {/each}
                </div>
            </div>
        {/if}
        <!--Show this continue button for impatient people-->
        {#if nextQuestionTimeout}
            <Button on:click={onClickContinue} disabled={!selectedAnswer}>
                Continue
            </Button>
        {:else}
            <Button on:click={onClickValidate} disabled={!selectedAnswer}>
                Validate answer
            </Button>
        {/if}
        <div class="grid grid-cols-[40px,1fr,40px]">
            <div></div>
            <div>

            </div>
            <Button size="icon" class="bg-card border text-foreground">
                <IconBulb stroke="1.5" />
            </Button>
        </div>
    </div>
{/if}