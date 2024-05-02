import { browser } from "$app/environment";
import { generateId } from "lucia";
import { writable } from "svelte/store";

export const GUEST_COOKIE_NAME = "guest_id";

const createGuestId = () => {
	let guest_id = generateId(40);
	if (browser) {
		guest_id = localStorage.getItem(GUEST_COOKIE_NAME) || guest_id;
	}

	const { subscribe } = writable(guest_id);

	return {
		subscribe,
	};
};

export const guestId = createGuestId();
