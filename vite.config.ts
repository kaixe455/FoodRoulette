import { defineConfig } from "vite";

export default defineConfig({
	alias: {
		"@": resolve(__dirname, "src"),
	},
	plugins: [],
	build: {
		rollupOptions: {
			external: ["/src/db/dbConection"],
		},
	},
});
