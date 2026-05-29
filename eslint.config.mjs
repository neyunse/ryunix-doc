import tailwindCanonicalClasses from 'eslint-plugin-tailwind-canonical-classes'
import tsParser from '@typescript-eslint/parser'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/*.mdx',
      '**/*.md',
      '**/*.d.ts',
      '**/node_modules/**',
      '.ryunix/**',
      'eslint.config.mjs',
    ],
  },
  {
    files: ['**/*.ryx', '**/*.ts', '**/*.js'],
    plugins: {
      'tailwind-canonical-classes': tailwindCanonicalClasses,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.ryx'],
      },
    },
    settings: {
      react: {
        pragma: 'Ryunix.createElement',
        fragment: 'Ryunix.Fragment',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      indent: 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@/lib/uiClasses',
              message:
                'No importar clases Tailwind desde un registry. Usa className inline en el componente (ver .cursor/rules/tailwind-inline-styles.mdc).',
            },
          ],
          patterns: [
            {
              group: ['**/uiClasses', '**/ui-classes', '**/tailwindClasses*'],
              message:
                'Prohibido un módulo central de clases Tailwind. Inline en el componente o extrae un .ryx.',
            },
          ],
        },
      ],
      'tailwind-canonical-classes/tailwind-canonical-classes': [
        'warn',
        {
          cssPath: './src/styles/global.css',
        },
      ],
    },
  },
]
