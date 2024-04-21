import { BRAND } from "$lib/config/brand";
import {
	BookingSchema,
	ContactSchema,
	ContactTeamBuildingSchema,
	EscapeSchema,
	SessionSchema,
	UserSchema,
} from "@repo/schemas";
import { logger } from "@repo/utils";
import { type Mongoose, connect } from "mongoose";

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
		connection.model("Escape", EscapeSchema);
		connection.model("Contact", ContactSchema);
		connection.model("ContactTeamBuilding", ContactTeamBuildingSchema);
		connection.model("Booking", BookingSchema);
	}

	con = connection;

	return connection;
};
