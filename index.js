const xo = require('eslint-config-xo/esnext');
const xoReact = require('eslint-config-xo-react');

module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true,
		jest: true
	},
	plugins: [...xoReact.plugins, 'react-native', 'promise'],
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
		'react/no-deprecated': 'warn',
		'react/no-this-in-sfc': 'error',
		'react/no-direct-mutation-state': 'error',
		'no-warning-comments': 'warn',
		'react-native/no-unused-styles': 'error',
		'import/no-absolute-path': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-extraneous-dependencies': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-duplicates': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/order': 'error',
		'import/no-unassigned-import': 'error',
		'import/extensions': ['error', 'never', {json: 'always'}],
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/catch-or-return': 'error',
		'promise/no-nesting': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/valid-params': 'error'
	},
	settings: {
		react: {
			version: '16.5.2'
		},
		'import/ignore': ['expo']
	}
};
