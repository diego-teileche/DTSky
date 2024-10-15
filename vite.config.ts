import { defineConfig } from "vite"
import { resolve } from "path"
import { globSync } from "glob"
import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({ tsconfigPath: "./tsconfig.app.json" }),
		libInjectCss(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			name: "DTSky",
			formats: ["es"],
			fileName: "dtsky",
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: Object.fromEntries(
				globSync("src/**/*.{ts,tsx}").map((file) => [
					path.relative(
						"src",
						file.slice(0, file.length - path.extname(file).length)
					),
					fileURLToPath(new URL(file, import.meta.url)),
				])
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
})
