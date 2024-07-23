module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/mocks/styleMock.ts',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest'
    },
}