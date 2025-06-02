/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
	},
}
