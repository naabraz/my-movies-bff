module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,}',
    '!src/types/*.{ts,}',
    '!src/schema/*.{ts,}',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
    },
  },
  moduleNameMapper: {
    '^~helpers(.*)$': '<rootDir>/src/helpers$1',
    '^~data(.*)$': '<rootDir>/src/data$1',
    '^~interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^~resolvers(.*)$': '<rootDir>/src/resolvers$1',
    '^~schema(.*)$': '<rootDir>/src/schema$1',
    '^~types(.*)$': '<rootDir>/src/types$1',
  },
};
