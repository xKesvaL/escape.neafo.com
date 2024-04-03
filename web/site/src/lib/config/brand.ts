export const BRAND = {
	name: "Kaiserstuhl Escape",
	logName: "kaiserstuhl-escape",
} as const;

export const LOCALES = ["en", "fr", "de"] as const;

export type Locale = (typeof LOCALES)[number]