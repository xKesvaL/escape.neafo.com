import { Schema } from "mongoose";
import type {
	Booking,
	Contact,
	ContactTeamBuilding,
	CustomImage,
	Escape,
	User,
} from "./zod";

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
		age: {
			type: Number,
			required: true,
		},
		firstname: {
			type: String,
			required: false,
		},
		lastname: {
			type: String,
			required: false,
		},
		role: {
			type: String,
			required: true,
			default: "user",
		},
		age: {
			type: String,
			required: true,
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

export const ContactSchema = new Schema<Contact>(
	{
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
	} as const,
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);

export const ContactTeamBuildingSchema = new Schema<ContactTeamBuilding>(
	{
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
	} as const,
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
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
		min_booking_hour: {
			type: Number,
			required: true,
			default: 8,
		},
		max_booking_hour: {
			type: Number,
			required: true,
			default: 18,
		},
		step_booking: {
			type: Number,
			required: true,
			default: 1,
		},
		exclude_booking: {
			type: [Number],
			required: true,
			default: [12],
		},
		min_people: {
			type: Number,
			required: true,
			default: 2,
		},
		max_people: {
			type: Number,
			required: true,
			default: 6,
		},
		image: {
			type: ImageSchema,
			required: false,
		},
		latitude: {
			type: Number,
			required: false,
		},
		longitude: {
			type: Number,
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

export const BookingSchema = new Schema<Booking>(
	{
		_id: {
			type: String,
			required: true,
		},
		escape_id: {
			type: String,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
		people_number: {
			type: Number,
			required: true,
		},
		draft: {
			type: Boolean,
			required: true,
			default: true,
		},
		date: {
			type: String,
			required: true,
		},
	},
	{
		_id: false,
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	},
);
