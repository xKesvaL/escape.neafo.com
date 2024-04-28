import { type QuizKey, quizzes } from "$lib/config/quizz";
import { fail } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	const quiz = quizzes[params.slug as QuizKey];

	if (!quiz) {
		return fail(404, {
			message: "Quiz not found",
		});
	}

	return {
		quiz,
	};
};
