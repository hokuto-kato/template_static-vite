module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: 'standard-with-typescript',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json']
	},
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		"indent": ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-var-requires": "off"
	}
}
