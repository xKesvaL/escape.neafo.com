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

export const fileToBase64Server = async (file: File) => {
	const buffer = Buffer.from(await file.arrayBuffer());
	return `data:${file.type};base64,${buffer?.toString("base64")}`;
};

export const formatPrice = (price: number) => {
	return Math.round(price).toFixed(2);
}