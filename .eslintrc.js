module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-use-before-define': 0,
  },
};
