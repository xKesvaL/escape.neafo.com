module.exports = {
	apps: [
		{
			name: "app",
			script: "vite preview",
			env: {
				ORIGIN: "http://localhost:4173",
			},
		},
	],
};