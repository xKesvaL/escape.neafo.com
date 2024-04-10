export type LogType = "info";

export const logger = {
	info: (message: string) => log(message, "info"),
};

const log = (message: string, type: LogType = "info") => {
	switch (type) {
		case "info":
			console.log(message);
			break;
	}
};

export const fileToBase64 = async (file: File) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
};
