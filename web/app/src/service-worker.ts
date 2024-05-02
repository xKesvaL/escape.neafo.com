/// <reference types="@sveltejs/kit" />
/// <reference lib="esnext" />
/// <reference lib="webworker" />

import { build, files, version } from "$service-worker";
import type { PwaMessage } from "@repo/global-config";

declare let self: ServiceWorkerGlobalScope;

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

// install
self.addEventListener("install", (event) => {
	const addFilesToCache = async () => {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	};

	event.waitUntil(addFilesToCache());
});

// activate
self.addEventListener("activate", (event) => {
	const removeOldCaches = async () => {
		const keys = await caches.keys();
		for (const key of keys) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	};

	event.waitUntil(removeOldCaches());
});

// fetch
self.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET") {
		return;
	}

	const fetchFromCache = async () => {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		try {
			const response = await fetch(event.request);
			const isNotExtension = url.protocol === "http:";
			const isSuccess = response.status === 200;

			if (isNotExtension && isSuccess) {
				await cache.put(event.request, response.clone());
			}

			return response;
		} catch (e) {
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) {
				return cachedResponse;
			}
		}

		return new Response("Not found", { status: 404 });
	};

	event.respondWith(fetchFromCache());
});

// handle messages
self.addEventListener("message", async (event) => {
	if (!event.data) {
		return;
	}

	switch (event.data.type as PwaMessage) {
		case "SKIP_WAITING":
			await self.skipWaiting();
			break;
	}
});
