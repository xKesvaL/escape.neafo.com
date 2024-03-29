import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
	{
		_id: {
			type: String,
			required: true,
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

export const Session = model("Session", SessionSchema);
