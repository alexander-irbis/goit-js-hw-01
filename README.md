# goit-js-hw-01 — String Formatting

GoIT JavaScript homework: string formatting, template literals, CSS value parsing.

**[Live demo](https://alexander-irbis.github.io/goit-js-hw-01/)**

## Setup

```bash
npm install
git config --local core.hooksPath .githooks
```

## Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm test`           | Run tests (Vitest)           |
| `npm run lint`       | Lint with ESLint             |
| `npm run format`     | Format code with Prettier    |
| `npm run format:check` | Check formatting without changes |

## Pre-commit hook

The `.githooks/pre-commit` hook runs automatically before each commit:

1. Prettier format check
2. ESLint
3. Vitest

Activate it with `git config --local core.hooksPath .githooks` (included in setup above).
