import { z } from "zod";

export const userRegisterZodSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export type UserRegister = z.infer<typeof userRegisterZodSchema>;

export const userZodSchema = z.object({
	_id: z.string(),
	email: z.string().email(),
	age: z.number(),
	firstname: z.string().optional(),
	lastname: z.string().optional(),
	role: z.enum(["user", "admin"]).default("user"),
	hashed_password: z.string().optional(),
});

export type User = z.infer<typeof userZodSchema>;

export const userEditZodSchema = userZodSchema.omit({
	_id: true,
	role: true,
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
	time: z.string().default("01:00"),
	address: z.string(),
	city: z.string(),
	postal_code: z.string(),
	price: z.string(),
	public: z.boolean().default(true),
	min_people: z.number().default(2),
	max_people: z.number().default(6),
	min_booking_hour: z.number().default(8),
	max_booking_hour: z.number().default(18),
	step_booking: z.number().default(1),
	exclude_booking: z.array(z.number()).default([12]),
	image: z
		.instanceof(File, { message: "Please upload a file." })
		.refine((f) => f.size < 10_000_000, "Max 10 mB upload size."),
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
	latitude: z.number().optional(),
	longitude: z.number().optional(),
	_id: z.string(),
	created_at: z.date(),
	updated_at: z.date(),
});

export type Escape = z.infer<typeof escapeZodSchema>;

export const escapeEditZodSchema = escapeZodSchema
	.omit({
		_id: true,
		created_at: true,
		updated_at: true,
	})
	.extend({
		image: z.any(),
	});

export type EscapeEdit = z.infer<typeof escapeEditZodSchema>;

export const contactZodSchema = z.object({
	_id: z.string(),
	name: z.string(),
	email: z.string().email(),
	message: z.string(),
});

export type Contact = z.infer<typeof contactZodSchema>;

export const contactTeamBuildingZodSchema = z.object({
	_id: z.string(),
	companyName: z.string(),
	place: z.string(),
	email: z.string().email(),
	message: z.string(),
});

export type ContactTeamBuilding = z.infer<typeof contactTeamBuildingZodSchema>;

export const bookingZodSchema = z.object({
	_id: z.string(),
	escape_id: z.string(),
	user_id: z.string(),
	people_number: z.number().default(2),
	draft: z.boolean().default(true),
	date: z.string().default(() => new Date().toISOString()),
});

export type Booking = z.infer<typeof bookingZodSchema>;
