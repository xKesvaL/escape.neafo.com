import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { kitRoutes } from "vite-plugin-kit-routes";
import type { KIT_ROUTES } from "$lib/ROUTES";
import { paraglide } from "@inlang/paraglide-js-adapter-sveltekit/vite";
import CONFIG from "../../global.config";
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
		enhancedImages(),
		paraglide({
			project: "../../project.inlang",
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
		port: CONFIG.ports.site,
	},
});
