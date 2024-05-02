import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const STATS_COOKIE_NAME = "stats";

export const STATS_POINTS_MAX = 2500;

export interface Stats {
	points: number;
	firstTime: boolean;
	events: string[];
	quizzes: string[];
	spots: string[];
	differences: string[];
}

const createStatsStore = () => {
	let stats: Stats = {
		points: 0,
		firstTime: true,
		events: [],
		quizzes: [],
		spots: [],
		differences: [],
	};

	if (browser) {
		const statsInStorage = localStorage.getItem(STATS_COOKIE_NAME);
		if (statsInStorage) {
			stats = JSON.parse(statsInStorage) as Stats;
		} else {
			localStorage.setItem(STATS_COOKIE_NAME, JSON.stringify(stats));
		}
	}

	const { subscribe, update } = writable<Stats>(stats);

	const updateStats = (newStats: Partial<Stats>) => {
		update((prev) => {
			const updatedStats = {
				...prev,
				...newStats,
			};
			localStorage.setItem(STATS_COOKIE_NAME, JSON.stringify(updatedStats));

			return updatedStats;
		});
	};

	const addPoints = (points: number) => {
		const currentStats = JSON.parse(
			localStorage.getItem(STATS_COOKIE_NAME) || "{}",
		) as Stats;
		updateStats({
			points: Math.min(STATS_POINTS_MAX, currentStats.points + points),
		});
	};

	const addEvent = (event: string | undefined) => {
		if (!event || stats.events.includes(event)) {
			return;
		}

		updateStats({
			events: [...stats.events, event],
		});
	};

	const addQuiz = (quiz: string | undefined) => {
		if (!quiz || stats.quizzes.includes(quiz)) {
			return;
		}

		updateStats({
			quizzes: [...stats.quizzes, quiz],
		});
	};

	const addSpots = (spot: string | undefined) => {
		if (!spot || stats.spots.includes(spot)) {
			return;
		}

		updateStats({
			spots: [...stats.spots, spot],
		});
	};

	const addDifference = (difference: string | undefined) => {
		if (!difference || stats.differences.includes(difference)) {
			return;
		}

		updateStats({
			differences: [...stats.differences, difference],
		});
	};

	return {
		subscribe,
		update: updateStats,
		addPoints,
		addEvent,
		addQuiz,
		addSpots,
		addDifference,
	};
};

export const stats = createStatsStore();
