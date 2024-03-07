import type { FastifyInstance, FastifyPluginOptions } from "fastify";

export default abstract class Route {
	protected app: FastifyInstance;
	protected opts: FastifyPluginOptions;
	protected done: (err?: Error) => void;

	public constructor(
		app: FastifyInstance,
		opts: FastifyPluginOptions,
		done: (err?: Error | undefined) => void,
	) {
		this.app = app;
		this.opts = opts;
		this.done = done;

		this.init().then(() => {
			this.done();
		});
	}

	abstract init(): Promise<void>;
}
