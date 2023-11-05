const { defaults } = require("jest-config");

/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules"],
    // moduleFileExtensions: [...defaults.moduleFileExtensions],
    verbose: true,
    setupFilesAfterEnv: ["./setup-tests.js"],
    moduleNameMapper: {
      views: "<rootDir>/src/views",
      ui: "<rootDir>/src/ui",
      hooks: "<rootDir>/src/hooks",
      utils: "<rootDir>/src/utils",
      provider: "<rootDir>/src/provider",
      workouts: "<rootDir>/src/workouts",
    },
  };
};
