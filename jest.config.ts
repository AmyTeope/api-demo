export default {
  collectCoverageFrom: ["./src/**/*.(t|j)s"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "^axios$": "axios/dist/node/axios.cjs"
  },
  preset: "ts-jest",
  rootDir: "./",
  setupFiles: ['<rootDir>/setEnvVars.js'],
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
