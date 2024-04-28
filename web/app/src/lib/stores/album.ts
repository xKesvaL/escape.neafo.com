import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const ALBUM_COOKIE_NAME = "album";

const createAlbumStore = () => {
	let album: string[] = [];
	if (browser) {
		album =
			(JSON.parse(
				localStorage.getItem(ALBUM_COOKIE_NAME) || "[]",
			) as string[]) || [];
	}

	const { subscribe, update } = writable(album);

	const addItem = (item: string) => {
		update((items) => {
			const newItems = [...items, item];
			localStorage.setItem(ALBUM_COOKIE_NAME, JSON.stringify(newItems));
			return newItems;
		});
	};

	return {
		subscribe,
		addItem,
	};
};

export const album = createAlbumStore();
