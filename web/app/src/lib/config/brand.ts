export const BRAND = {
	name: "Kaiserstuhl Escape",
	logName: "kaiserstuhl-escape",
	url: "http://",
	colors: {
		primary: "yellow",
	},
} as const;

export const LOCALES = ["en", "fr", "de"] as const;

export type Locale = (typeof LOCALES)[number];

export const VERSION = "1.0.0" as const;
