# TSLib Stack

> A stack for modern TypeScript libraries

## Introduction

A stack with everything you need when writing modern, maintainable TypeScript libraries and tools.

**[Example Docs](https://felixrilling.github.io/tslib-stack/)**

## Tools

-   Typescript
-   ESLint
-   Jasmine
-   JSDoc
-   Rollup
-   Uglify

## Structure

-   `src/` Contains the main library code.
    -   `main.ts` Library entry point.
-   `specs/` Jasmine tests.
    -   `main.ts` Test entry point.
-   `dist/` Compiled output.
-   `docs/` Documentation generated from docs script.

## Scripts

-   `dist` Compiles the library, runs tests and builds docs.
-   `build` Compiles the library.
-   `test` Compiles and runs tests
-   `docs` Generates JSDoc documentation
-   `lint` Lints all source scripts and tests
-   `fix` Auto-fixes issues in source scripts and tests
