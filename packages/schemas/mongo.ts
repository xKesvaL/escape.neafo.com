import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
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
