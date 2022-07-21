import { defineConfig } from "vite"
import input from "@macropygia/vite-plugin-glob-input"
// import imagemin from "@macropygia/vite-plugin-imagemin-cache"
import pug from "@macropygia/vite-plugin-pug-static"
import squoosh from "./plugin/squoosh.js"

export default defineConfig(({ mode }) => {
	console.log("** mode **", mode)
	return {
		base: "./",
		root: "src",
		server: {
			open: true,
			host: true,
		},
		css: {
			devSourcemap: true,
		},
		build: {
			outDir: "../dist",
			emptyOutDir: true,
			sourcemap: mode === "develop",
			minify: mode === "production" ? "terser" : false,
			rollupOptions: {
				output: {
					chunkFileNames: "js/app.[hash].js",
					entryFileNames: "js/app.[hash].js",
					assetFileNames: ({ name }) => {
						if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
							return "img/[name].[hash][extname]"
						}
						if (/\.css$/.test(name ?? "")) {
							return "css/app.[hash][extname]"
						}
						return "assets/[name].[hash][extname]"
					},
				},
			},
		},
		plugins: [
			pug(),
			squoosh(),
			input({
				patterns: ["src/**/[^_]*.pug"],
			}),
		],
	}
})
