import { type Difference, differences } from "$lib/config/differences";
import { type MapEvent, mapEvents } from "$lib/config/events";
import { type Quiz, quizzes } from "$lib/config/quizz";
import { type Spot, spots } from "$lib/config/spots";
import type { Location } from "$lib/stores/location";

export const isAnyEventClose = (
	position: Location,
	doneEvents: string[] = [],
): MapEvent | null => {
	const currentEvents = mapEvents.filter(
		(event) => !doneEvents.includes(event.name),
	);

	for (const event of currentEvents) {
		const distance = Math.sqrt(
			(event.position.longitude - position.position.longitude) ** 2 +
				(event.position.latitude - position.position.latitude) ** 2,
		);
		if (distance < 0.0003) {
			return event;
		}
	}
	return null;
};

export const isAnyQuizClose = (
	position: Location,
	doneQuizzes: string[] = [],
): Quiz | null => {
	const currentQuizzes: Quiz[] = Object.values(quizzes).filter(
		(quiz) => !doneQuizzes.includes(quiz.name),
	);

	for (const quiz of currentQuizzes) {
		const distance = Math.sqrt(
			(quiz.location.longitude - position.position.longitude) ** 2 +
				(quiz.location.latitude - position.position.latitude) ** 2,
		);
		if (distance < 0.0003) {
			return quiz;
		}
	}
	return null;
};

export const isAnySpotsClose = (
	position: Location,
	doneSpots: string[] = [],
): Spot | null => {
	const currentSpots = spots.filter((spot) => !doneSpots.includes(spot.slug));

	for (const spot of currentSpots) {
		const distance = Math.sqrt(
			(spot.location.longitude - position.position.longitude) ** 2 +
				(spot.location.latitude - position.position.latitude) ** 2,
		);
		if (distance < 0.0003) {
			return spot;
		}
	}
	return null;
};

export const isAnyDifferencesClose = (
	position: Location,
	doneDifferences: string[] = [],
): Difference | null => {
	const currentDifferences = differences.filter(
		(difference) => !doneDifferences.includes(difference.name),
	);

	for (const difference of currentDifferences) {
		const distance = Math.sqrt(
			(difference.location.longitude - position.position.longitude) ** 2 +
				(difference.location.latitude - position.position.latitude) ** 2,
		);
		if (distance < 0.0003) {
			return difference;
		}
	}
	return null;
};
