import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type Location = {
	position: {
		longitude: number;
		latitude: number;
	};
	isTracking: boolean;
};

const createLocationStore = () => {
	const location: Location = {
		position: {
			longitude: 7.3379,
			latitude: 47.7452,
		},
		isTracking: false,
	};

	const { subscribe, set } = writable(location);

	const trackLocation = () => {
		if (!browser) {
			return;
		}

		navigator.geolocation.watchPosition((position) => {
			set({
				position: {
					longitude: position.coords.longitude,
					latitude: position.coords.latitude,
				},
				isTracking: true,
			});
		});
	};

	return {
		subscribe,
		trackLocation,
	};
};

export const locationStore = createLocationStore();
