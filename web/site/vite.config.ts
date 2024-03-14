import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { kitRoutes } from "vite-plugin-kit-routes";
import type { KIT_ROUTES } from "$lib/ROUTES";
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";

export default defineConfig({
	plugins: [
		paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			format: "route(path)",
		}),
	],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	server: {
		port: 5200,
	},
});
