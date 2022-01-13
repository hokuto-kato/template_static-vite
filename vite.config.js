import {defineConfig} from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
	base: "./",
	root: "src",
	build: {
		outDir: "../dist",
		emptyOutDir: true
	},
	plugins: [
		viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: "removeViewBox",
		// 			},
		// 			{
		// 				name: "removeEmptyAttrs",
		// 				active: false,
		// 			},
		// 		],
		// 	},
		}),
	],
});
