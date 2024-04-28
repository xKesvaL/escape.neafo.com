import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const POINTS_COOKIE_NAME = "points";

export const POINTS_MAX = 2500;

const createPointsStore = () => {
	let points = 0;
	if (browser) {
		points = Number(localStorage.getItem(POINTS_COOKIE_NAME)) || 0;
	}

	const { subscribe, set } = writable(points);

	const setPoints = (newPoints: number) => {
		localStorage.setItem(POINTS_COOKIE_NAME, newPoints.toString());
		set(newPoints);
	};

	return {
		subscribe,
		set: setPoints,
	};
};

export const points = createPointsStore();
