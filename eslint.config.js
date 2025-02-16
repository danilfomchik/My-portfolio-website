import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        ignores: ['dist', '**/node_modules/*'],
    },
    pluginJs.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            'no-unused-vars': 'error',
            'max-len': ['warn', 120],
            'no-console': [
                'warn',
                {
                    allow: ['warn'],
                },
            ],
            'no-undef': 'warn',
        },
    },
];
