/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: ["main", { name: "next", prerelease: true, channel: "next" }],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/github",
	],
};
