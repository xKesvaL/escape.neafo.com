import { Schema } from "mongoose";
import type { User } from "./zod";

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
