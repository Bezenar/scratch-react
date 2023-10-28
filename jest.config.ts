/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageProvider: 'v8',
    roots: ['<rootDir>/src/'],
    preset: 'ts-jest',
    moduleNameMapper: {
        '\\.module.scss': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/jestDom.ts'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;
