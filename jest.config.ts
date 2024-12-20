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
        '^@atoms(.*)$': '<rootDir>/src/components/atoms$1',
        '^@icons(.*)$': '<rootDir>/src/components/icons$1',
        '^@molecules(.*)$': '<rootDir>/src/components/molecules$1',
        '^@organisms(.*)$': '<rootDir>/src/components/organisms$1',
        '^@templates(.*)$': '<rootDir>/src/components/templates$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@img(.*)$': '<rootDir>/src/assets/img$1',
        '^@mocks(.*)$': '<rootDir>/src/_mocks_$1',
        '^@t\/(.*)$': '<rootDir>/src/types$1',
    },
    transform: {
        '.+\\.(png|svg|jpg|jpeg|gif)$': 'jest-transform-stub',
    },
    setupFilesAfterEnv: ['<rootDir>/.jest/jestDom.ts'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],
};

export default config;
