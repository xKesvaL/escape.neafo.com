import { Schema } from "mongoose";
import type { CustomImage, Escape, User } from "./zod";

export const UserSchema = new Schema<User>(
	{
		_id: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			index: true,
		},
		firstname: {
			type: String,
			required: false,
		},
		lastname: {
			type: String,
			required: false,
		},
		hashed_password: {
			type: String,
			required: false,
		},
	} as const,
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
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
	{
		_id: false,
	},
);

export const ImageSchema = new Schema<CustomImage>({
	data: String,
	content_type: String,
	id: String,
});

export const EscapeSchema = new Schema<Escape>(
	{
		_id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			index: true,
		},
		slug: {
			type: String,
			required: true,
			index: true,
		},
		description: {
			type: String,
			required: true,
		},
		langs: {
			type: [String],
			required: true,
		},
		difficulty: {
			type: String,
			required: true,
		},
		puzzle: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		postal_code: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		public: {
			type: Boolean,
			default: true,
		},
		image: {
			type: ImageSchema,
			required: false,
		},
	} as const,
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
