export default {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'standard-with-typescript',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	rules: {
		'no-tabs': 0,
	},
}