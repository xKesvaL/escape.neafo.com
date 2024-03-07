import Route from "../classes/route.js";

export default class Test extends Route {
	async init() {
		this.app.get("/", async (req, res) => {
			return res.send("Hello, world!");
		});
	}
}
