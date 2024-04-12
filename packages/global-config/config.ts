import type { EscapeCreation } from "@repo/schemas/zod";

export const CONFIG = {
	locales: ["en", "fr"],
	ports: {
		site: 5200,
		app: 5210,
	},
} as const;

export const ESCAPE = {
	difficulties: ["easy", "medium", "hard"] satisfies Array<
		EscapeCreation["difficulty"]
	>,
	puzzle: ["beginner", "intermediate", "advanced", "expert"] satisfies Array<
		EscapeCreation["puzzle"]
	>,
} as const;

export const PWA_MESSAGES_TYPES = ["SKIP_WAITING"] as const;

export type PwaMessage = (typeof PWA_MESSAGES_TYPES)[number];
