/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^Components/(.*)": "./src/components/$1",
  },
  globals: {
    window: {},
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
  setupFiles: ["./jest.stubs.js"],
  testURL: "http://localhost/",

  roots: ["<rootDir>/src"],
};
