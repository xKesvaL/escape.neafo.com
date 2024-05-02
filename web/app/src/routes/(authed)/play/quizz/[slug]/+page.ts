import { route } from "$lib/ROUTES";
import { type QuizKey, quizzes } from "$lib/config/quizz";
import { fail, redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
	const quiz = quizzes.find((quiz) => {
		return quiz.name === params.slug;
	});

	if (!quiz) {
		return redirect(302, route("/play"));
	}

	return {
		quiz,
	};
};
