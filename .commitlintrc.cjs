/** @type {import('czg').UserConfig} */
module.exports = {
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
	},
	prompt: {
		scopes: [
			"app-auth",
			"app-general",
			"app-database",
			"app-design",
			"site-auth",
			"site-general",
			"site-database",
			"site-design",
			"monorepo",
		],
	},
};
