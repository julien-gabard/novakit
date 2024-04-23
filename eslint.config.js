import eslint from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    {
        files: ['*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
    {
        rules: {
            'arrow-body-style': ['error', 'as-needed'],
            curly: ['error', 'all'],
            eqeqeq: 'error',
            'linebreak-style': ['error', 'unix'],
            'no-console': 'off',
            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    next: '*',
                    prev: ['const'],
                },
                {
                    blankLine: 'any',
                    next: ['const'],
                    prev: ['const'],
                },
                {
                    blankLine: 'always',
                    next: 'return',
                    prev: '*',
                },
            ],
            'prefer-destructuring': [
                'error',
                {
                    array: true,
                    object: true,
                },
            ],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: false,
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'sort-imports': [
                'error',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: false,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: [
                        'none',
                        'all',
                        'multiple',
                        'single',
                    ],
                    allowSeparatedGroups: true,
                },
            ],
        },
    },
    eslintPluginPrettierRecommended,
)
