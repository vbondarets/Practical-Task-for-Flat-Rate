/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json', 'node'],

  roots: ['<rootDir>'],
  modulePaths: [
    "<rootDir>"
  ],
  moduleNameMapper: {
    "./node_modules/(.*)": "<rootDir>/node_modules/$1",
  },
  moduleDirectories: [
    "node_modules",
    "build",
  ],

  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/__test__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$':  'ts-jest'
  },
};
