export const CONFIG = {
	locales: ["en", "fr"],
	ports: {
		site: 5200,
		app: 5210,
	},
} as const;

export const ESCAPE = {
	difficulties: ["easy", "medium", "hard"],
} as const;
