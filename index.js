module.exports = {
	env: {
		node: true,
		es6: true,
		browser: true
	},
	globals: {
		window: true
	},
	extends: ['xo', 'xo-react', 'plugin:import/errors'],
	parser: 'babel-eslint',
	rules: {
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
		'no-await-in-loop': 'off',
		'capitalized-comments': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/jsx-wrap-multilines': 'off',
		'no-mixed-operators': 'off',
		'operator-linebreak': 'off',
		'space-before-function-paren': 'off',
		'react/jsx-child-element-spacing': 'off',
		'import/default': 'off',
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],
		'generator-star-spacing': ['error', {after: false, before: false}]
	}
};
