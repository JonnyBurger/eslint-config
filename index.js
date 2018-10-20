const xo = require('eslint-config-xo/esnext');
const xoReact = require('eslint-config-xo-react');

module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true
	},
	plugins: [...xoReact.plugins, 'react-native'],
	extends: ['eslint:recommended', 'plugin:import/errors'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		...xo.rules,
		...xoReact.rules,
		indent: 'off',
		'indent-legacy': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'react/prop-types': 'off',
		camelcase: 'off',
		'guard-for-in': 'off',
		'react/forbid-component-props': 'off',
		'prefer-const': 'off',
		'no-console': 'off',
		'no-await-in-loop': 'off',
		'capitalized-comments': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/jsx-wrap-multilines': 'off',
		'no-mixed-operators': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'operator-linebreak': 'off',
		'space-before-function-paren': 'off',
		'react/jsx-child-element-spacing': 'off',
		'import/default': 'off',
		'no-template-curly-in-string': 'error',
		'require-atomic-updates': 'error',
		'default-case': 'error',
		'no-unused-vars': [
			'error',
			{vars: 'all', args: 'after-used', ignoreRestSiblings: true}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		'generator-star-spacing': ['error', {after: false, before: false}],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: false,
				shorthandFirst: false,
				shorthandLast: false,
				ignoreCase: false,
				noSortAlphabetically: true,
				reservedFirst: true
			}
		],
		'react/jsx-no-target-blank': 'off',
		'react/no-unsafe': 'warn',
		'react/no-did-mount-set-state': 'error',
		'no-warning-comments': 'warn',
		'react-native/no-unused-styles': 'error'
	},
	overrides: [
		{
			files: 'web/**',
			rules: {'react-native/no-raw-text': 'off'}
		}
	],
	settings: {
		react: {
			version: '16.5.2'
		}
	}
};
