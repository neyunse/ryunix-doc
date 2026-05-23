/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.ryx', '**/*.js'],
    ignores: ['**/*.mdx', '**/*.md', '**/node_modules/**', '.ryunix/**'],
    languageOptions: {
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
    },
  },
]
