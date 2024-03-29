export type LogType = "info";

export const logger = {
  info: (message: string) => log(message, "info"),
}

const log = (message: string, type: LogType = "info") => {
	switch (type) {
		case "info":
			console.log(message);
			break;
	}
};