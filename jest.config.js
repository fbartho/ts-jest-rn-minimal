module.exports = {
  verbose: true,
  automock: false,
  // preset: "react-native",
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$":
      "RelativeImageStub",
    "^React$": "<rootDir>/node_modules/react"
  },
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/react-native/Libraries/react-native/",
    "<rootDir>/node_modules/react-native/packager/"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element)"
  ],
  setupFiles: ["<rootDir>/node_modules/react-native/jest/setup.js"],
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // "^.+\\.jsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    ".*test_helpers?\\.[tj]sx?",
    ".*.map",
    "/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/build/",
    "<rootDir>/tmp/"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,

  globals: {
    "ts-jest.disabled": {
      useBabelrc: false,
      mapCoverage: true
    }
  }
};
