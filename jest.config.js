/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/*.spec.ts'],
    transform: {
        '.+': ['ts-jest', {
            diagnostics: {
                ignoreCodes: ['TS151001'],
            },
        }],
    }
};
