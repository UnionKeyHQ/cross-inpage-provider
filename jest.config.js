module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@unionkeyfe/cross-inpage-provider-events$': '<rootDir>/packages/events/cross-events.js',
    '^@unionkeyfe/cross-inpage-provider-errors$': '<rootDir>/packages/errors/src/index.ts',
    '^@unionkeyfe/cross-inpage-provider-types$': '<rootDir>/packages/types/src/index.ts',
    '^@unionkeyfe/(.*)$': '<rootDir>/packages/$1/src',
  },
  testPathIgnorePatterns: [
    '/inpage-providers-hub/.*/universal/',
    '/node_modules/',
    '/__tests__/fixtures/',
    '/dist/',
  ],
};
