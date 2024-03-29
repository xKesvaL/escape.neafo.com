import { BRAND } from "$lib/config/brand";
import { connect, model, type Mongoose } from "mongoose";
import { UserSchema, SessionSchema } from "@repo/schemas";
import { logger } from "@repo/utils";

let con: null | Mongoose = null;

export const getDatabaseConnection = async (): Promise<Mongoose> => {
	if (con) {
		return con;
	}

	const connection = await connect(
		process.env.MONGODB_URI || "mongodb://localhost:27017",
		{
			appName: `${BRAND.name}/web`,
		},
	);

	logger.info("");

	con = connection;

	return connection;
};

export const User = model("User", UserSchema);
export const Session = model("Session", SessionSchema);
