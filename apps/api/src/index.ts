import fastify from "fastify";
import cors from "@fastify/cors";
import { ALLOWED_ORIGINS } from "./config/cors.js";
import { glob } from "glob";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { PORT } from "./config/common.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = fastify();

await app.register(cors, {
	origin: ALLOWED_ORIGINS,
});

const routes = await glob("./routes/**/*", { cwd: __dirname });

for (const file of routes) {
	const prefix = file.split("/").slice(1).join("/").split(".")[0] || "/";

	app.register(
		(app, opts, done) => {
			import(`./${file}`).then((route) => new route.default(app, opts, done));
		},
		{
			prefix: prefix,
		},
	);
}

app.listen({ port: PORT }, () => {
	console.log(`Server listening on http://127.0.0.1:${PORT}`);
});
