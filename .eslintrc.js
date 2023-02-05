module.exports = {
  plugins: ['react'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    },
  },

  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  rules: {
    semi: [2, 'always'],
    indent: ['error', 2],
    quotes: [2, 'single', 'avoid-escape'],
    'no-console': 'off',
    'no-shadow': 'error',
    'no-unused-vars': 'off',
    'block-spacing': 'error',
    'no-multi-spaces': 'error',
    'block-scoped-var': 'error',
    'no-trailing-spaces': 'error',
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 140 }],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
