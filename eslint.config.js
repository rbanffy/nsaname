const js = require('@eslint/js')

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'never'],
    },
  },
]
