import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
			external: ["src/db/dbConnection"],
		},
	},
});
