module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/src/.+.spec.ts$",
    "<rootDir>/node_modules/"
  ]
};
