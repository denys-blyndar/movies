module.exports = {
  plugins: ['react', 'react-hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
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
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': 'error',
    'block-spacing': 'error',
    'no-multi-spaces': 'error',
    'block-scoped-var': 'error',
    'no-trailing-spaces': 'error',
    'max-len': ['error', { code: 140 }],
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
