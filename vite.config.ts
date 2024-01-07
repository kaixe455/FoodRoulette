import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
			external: ["@db/dbConnection.js"],
		},
	},
});
