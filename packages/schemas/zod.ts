import { z } from "zod";

export const userRegisterZodSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type UserRegister = z.infer<typeof userRegisterZodSchema>;

export const userZodSchema = z.object({
	_id: z.string(),
	email: z.string().email(),
	hashed_password: z.string().optional(),
});

export type User = z.infer<typeof userZodSchema>;

export const escapeCreateZodSchema = z.object({
	name: z.string(),
	slug: z.string(),
	description: z.string(),
	langs: z.array(z.enum(["fr", "en", "de"] as const)),
		difficulty: z.enum(["easy", "medium", "hard"] as const),
	puzzle: z.enum(["beginner", "medium", "advanced", "expert"] as const),
	time: z.string(),
	address: z.string(),
	city: z.string(),
	postal_code: z.number(),
	price: z.number()
	// images: z.array(z.string())
});

export type EscapeCreation = z.infer<typeof escapeCreateZodSchema>;

export const escapeZodSchema = escapeCreateZodSchema.extend({
	_id: z.string(),
	created_at: z.date(),
	updated_at: z.date()
});

export type Escape = z.infer<typeof escapeZodSchema>;
