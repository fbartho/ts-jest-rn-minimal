const { jestPreset: tsJest } = require('ts-jest');

module.exports = {
  ...tsJest,
  preset: "react-native",
  transform: {
    ...tsJest.transform,
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    }
  }
};
