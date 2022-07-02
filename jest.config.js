module.exports = {
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },

  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
};
