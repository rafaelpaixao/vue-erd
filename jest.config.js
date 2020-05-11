module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/unit/mocks/file-mock.js'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{vue}', '!**/node_modules/**', '!<rootDir>/dist/**',
    '!<rootDir>/src/plugins/**', '!<rootDir>/tests/unit/**'
  ],
  coverageReporters: ['lcov', 'text-summary']
}
