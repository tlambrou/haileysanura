module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'flowtype', 'jsx-a11y', 'react-hooks'],
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    strict: 0,
    'react/prop-types': 0,
    'react/display-name': [0, { ignoreTranspilerName: true }],
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
