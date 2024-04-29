import CathedralMulhouse from "$lib/components/quizzes/center-mulhouse/CathedralMulhouse.svelte";
import OldestPharmacy from "$lib/components/quizzes/center-mulhouse/OldestPharmacy.svelte";
import TailorBuilding from "$lib/components/quizzes/center-mulhouse/TailorBuilding.svelte";
import FragranceGarden from "$lib/components/quizzes/fragrance-garden/FragranceGarden.svelte";
import FragranceGarden1 from "$lib/components/quizzes/fragrance-garden/FragranceGarden1.svelte";
import RalfBenner from "$lib/components/quizzes/fragrance-garden/RalfBenner.svelte";
import * as m from "$paraglide/messages";

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
			question: m.center_mulhouse_quiz_question_0(),
			content: CathedralMulhouse,
			answers: [m.center_mulhouse_quiz_question_0_0(),m.center_mulhouse_quiz_question_0_1(), m.center_mulhouse_quiz_question_0_2(), m.center_mulhouse_quiz_question_0_3()],
			correctAnswer: m.center_mulhouse_quiz_question_0_0(),
			hints: [],
		},
		{
			question: m.center_mulhouse_quiz_question_1(),
			content: CathedralMulhouse,
			answers: ["1900", "1866", "1804", "1769"],
			correctAnswer: "1866",
			hints: [],
		},
		{
			question: m.center_mulhouse_quiz_question_2(),
			content: OldestPharmacy,
			answers: [m.center_mulhouse_quiz_question_2_0(), m.center_mulhouse_quiz_question_2_1(), m.center_mulhouse_quiz_question_2_2(), m.center_mulhouse_quiz_question_2_3()],
			correctAnswer: m.center_mulhouse_quiz_question_2_0(),
			hints: [],
		},
		{
			question: m.center_mulhouse_quiz_question_3(),
			content: TailorBuilding,
			answers: [m.center_mulhouse_quiz_question_3_0(), m.center_mulhouse_quiz_question_3_1(), m.center_mulhouse_quiz_question_3_2(), m.center_mulhouse_quiz_question_3_3()],
			correctAnswer: m.center_mulhouse_quiz_question_3_0(),
			hints: [],
		},
	],
} as const satisfies Quiz;

export const fragranceGarden = {
	slug: "fragrance-garden",
	questions: [
		{
			question:m.fragrance_garden_quiz_question_0(),
			content: FragranceGarden,
			answers: [m.fragrance_garden_quiz_question_0_0(), m.fragrance_garden_quiz_question_0_1(), m.fragrance_garden_quiz_question_0_2(), m.fragrance_garden_quiz_question_0_3()],
			correctAnswer: m.fragrance_garden_quiz_question_0_2(),
			hints: [],
		},
		{
			question: m.fragrance_garden_quiz_question_1(),
			content: RalfBenner,
			answers: [m.fragrance_garden_quiz_question_1_0(), m.fragrance_garden_quiz_question_1_1(), m.fragrance_garden_quiz_question_1_2(), m.fragrance_garden_quiz_question_1_3()],
			correctAnswer: m.fragrance_garden_quiz_question_1_2(),
			hints: [],
		},
		{
			question: m.fragrance_garden_quiz_question_2(),
			content: FragranceGarden1,
			answers: [m.fragrance_garden_quiz_question_2_0(), m.fragrance_garden_quiz_question_2_1(), m.fragrance_garden_quiz_question_2_2(), m.fragrance_garden_quiz_question_2_3()],
			correctAnswer: m.fragrance_garden_quiz_question_2_0(),
			hints: [],
		},
		{
			question: m.fragrance_garden_quiz_question_3(),
			content: FragranceGarden,
			answers: ["70", "130", "100", "25"],
			correctAnswer: "130",
			hints: [],
		},
	],
} as const satisfies Quiz;

export const quizzes = {
	"center-mulhouse": centerMulhouseQuiz,
	"fragrance-garden":fragranceGarden
} as const;

export type QuizKey = keyof typeof quizzes;
