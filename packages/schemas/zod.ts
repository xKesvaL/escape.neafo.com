import { z } from "zod";

export const userRegisterZodSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type UserRegister = z.infer<typeof userRegisterZodSchema>;

export const userZodSchema = z.object({
	_id: z.string(),
	email: z.string().email(),
	firstname: z.string().optional(),
	lastname: z.string().optional(),
	hashed_password: z.string().optional(),
});

export type User = z.infer<typeof userZodSchema>;

export const userEditZodSchema = userZodSchema.omit({
	_id: true,
	hashed_password: true,
});

export type UserEdit = z.infer<typeof userZodSchema>;

export const escapeCreateZodSchema = z.object({
	name: z.string(),
	slug: z.string(),
	description: z.string(),
	langs: z.array(z.enum(["fr", "en", "de"] as const)),
	difficulty: z.enum(["easy", "medium", "hard"] as const),
	puzzle: z.enum(["beginner", "intermediate", "advanced", "expert"] as const),
	time: z.string(),
	address: z.string(),
	city: z.string(),
	postal_code: z.string(),
	price: z.string(),
	public: z.boolean().default(true),
	image: z
		.instanceof(File, { message: "Please upload a file." })
		.refine((f) => f.size < 1_000_000, "Max 1 mB upload size."),
});

export type EscapeCreation = z.infer<typeof escapeCreateZodSchema>;

export const customImageZodSchema = z.object({
	content_type: z.string(),
	id: z.string(),
	data: z.string(),
});

export type CustomImage = z.infer<typeof customImageZodSchema>;

export const escapeZodSchema = escapeCreateZodSchema.extend({
	image: customImageZodSchema,
	_id: z.string(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Escape = z.infer<typeof escapeZodSchema>;

export const contactZodSchema = z.object({
	_id: z.string(),
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

export type Contact = z.infer<typeof contactZodSchema>;


export const contactTeambuildingZodSchema = z.object({
	_id: z.string(),
	companyName: z.string(),
	place: z.string(),
	email: z.string().email(),
	message: z.string(),
});

export type ContactTeambuilding = z.infer<typeof contactTeambuildingZodSchema>;
