/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { BRAND, VERSION } from "$lib/config/brand";

export function GET() {
	const data = {
		name: BRAND.name,
		short_name: BRAND.name,
		description: "Description",
		start_url: `${BRAND.url}/?version=${VERSION}`,
		background_color: "#06040b",
		display: "standalone",
		icons: [
			{
				sizes: "192x192",
				src: "/android-chrome-192x192.png",
				type: "image/png",
			},
			{
				sizes: "512x512",
				src: "/android-chrome-512x512.png",
				type: "image/png",
			},
		],
		theme_color: BRAND.colors.primary,
	};

	return Response.json(data, {
		headers: {
			"Content-Type": "application/manifest+json",
		},
	});
}
