module.exports = {
  verbose: true,
  rootDir: ".",
  testEnvironment: "node",
  testTimeout: 5000,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  transformIgnorePatterns: ["src/node_modules/(?!@sapper)"],
  testMatch: ["<rootDir>/test/*.test.js"],
  setupFilesAfterEnv: ["./jest.setup.js"]
};
