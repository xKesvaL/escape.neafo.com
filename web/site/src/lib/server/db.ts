import { BRAND } from "$lib/config/brand";
import { connect, type Mongoose } from "mongoose";
import { UserSchema, SessionSchema } from "@repo/schemas";
import { logger } from "@repo/utils";

let con: null | Mongoose = null;

export const getDatabaseConnection = async (): Promise<Mongoose> => {
	if (con) {
		return con;
	}

	const connection = await connect("mongodb://localhost:27017", {
		appName: `${BRAND.logName}/web`,
		dbName: `${BRAND.logName}-web`,
	});	

	logger.info("Mongoose connection complete");

	if (!connection.models.User) {
		connection.model("User", UserSchema);
		connection.model("Session", SessionSchema);
	}

	con = connection;

	return connection;
};