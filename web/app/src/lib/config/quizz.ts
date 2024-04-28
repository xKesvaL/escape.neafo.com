import CenterMulhouseContent from "$lib/components/quizzes/center-mulhouse/CenterMulhouseContent.svelte";
import type { ComponentType } from "svelte";

interface Quiz {
	slug: string;
	questions: QuizQuestion[];
}

interface QuizQuestion {
	question: string;
	content: ComponentType;
	answers: string[];
	correctAnswer: string;
	hints: string[];
}

export const centerMulhouseQuiz = {
	slug: "center-mulhouse",
	questions: [
		{
			question: "What is the name of this historic building ?",
			content: CenterMulhouseContent,
			answers: ["Temple of Mulhouse", "Guillaume", "Babar", "Tigrou"],
			correctAnswer: "Temple of Mulhouse",
			hints: [],
		},
	],
} as const satisfies Quiz;

export const quizzes = {
	"center-mulhouse": centerMulhouseQuiz,
} as const;

export type QuizKey = keyof typeof quizzes;
