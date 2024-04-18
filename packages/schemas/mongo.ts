import { Schema } from "mongoose";
import type { ContactTeambuilding, CustomImage, Escape, User, Booking } from "./zod";
import {z} from "zod";

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

export const ImageSchema = new Schema<CustomImage>(
	{
		data: String,
		content_type: String,
		id: String,
	} as const,
	{
		_id: false,
	},
);

export const ContactSchema = new Schema<Contact>({
	_id: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
} as const, {
	_id: false,
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
});

export const ContactTeambuildingSchema = new Schema<ContactTeambuilding>({
	_id: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	place: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
} as const, {
	_id: false,
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
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

export const BookingSchema = new Schema<Booking>({
	_id: {
		type: String,
		required: true
	},
	escape_id: {
		type: String,
		required: true
	},
	people_number: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
},
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	})