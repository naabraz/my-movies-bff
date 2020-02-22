module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,}',
    '!src/types/*.{ts,}',
    '!src/schema/*.{ts,}',
  ],
};
