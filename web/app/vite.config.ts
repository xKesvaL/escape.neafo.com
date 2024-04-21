import type { KIT_ROUTES } from "$lib/ROUTES";
import { paraglide } from "@inlang/paraglide-sveltekit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { kitRoutes } from "vite-plugin-kit-routes";
import { defineConfig } from "vitest/config";
import CONFIG from "../../global.config";

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
