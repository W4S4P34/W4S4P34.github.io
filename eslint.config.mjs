import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
	pluginJs.configs.recommended,
	pluginReactConfig,
	{
		languageOptions: {
			globals: { __dirname: true, ...globals.browser },
		},
	},
	{
		files: ['**/*.jsx'],
		languageOptions: {
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
	},
];
