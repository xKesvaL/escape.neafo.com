import { Schema } from "mongoose";
import type { User } from "./zod";
import type { Escape } from "./zod";

export const UserSchema = new Schema<User>(
	{
		_id: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			index: true
		},
		hashed_password: {
			type: String,
			required: false,
		},
	} as const,
	{ _id: false },
);

export const SessionSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		expires_at: {
			type: Date,
			required: true,
		},
	} as const,
	{ _id: false },
);

export const EscapeSchema = new Schema<Escape>(
	{
		_id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			index: true
		},
		slug: {
			type: String,
			required: true,
			index: true
		},
		description: {
			type: String,
			required: true
		},
		langs: {
			type: [String],
			required: true
		},
		difficulty: {
			type: String,
			required: true
		},
		puzzle: {
			type: String,
			required: true
		},
		time: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		postal_code: {
			type: Number,
			required: true
		},
		price: {
			type: Number,
			required: true
		}
	} as const,
	{ _id: false },
);
