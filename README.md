# Playwright UI & API Testing

A QA automation portfolio project built with **Playwright and TypeScript** to demonstrate modern testing practices across UI, API, accessibility, and CI/CD.

## What this project demonstrates

- UI automation with Playwright
- Page Object Model (POM)
- Positive and negative login scenarios
- End-to-end cart and checkout testing
- REST API testing with Playwright `APIRequestContext`
- Reusable test data
- HTML reports, traces, screenshots, and videos
- Automated execution with GitHub Actions

## Demo applications

- **UI:** SauceDemo
- **API:** JSONPlaceholder

Both are public demo services used only for learning and portfolio testing.

## Project structure

```text
pages/                  Page Object classes
tests/ui/               UI and end-to-end tests
tests/api/              REST API tests
tests/accessibility/    Automated accessibility checks
test-data/              Reusable test data
.github/workflows/      GitHub Actions CI pipeline
```

## Setup

Prerequisites: Node.js 20+.

```bash
npm install
npx playwright install
```

## Run tests

Run all tests:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Run accessibility tests:

```bash
npm run test:a11y
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run report
```

## Accessibility testing

The project includes an automated WCAG-oriented scan using `@axe-core/playwright`. Automated accessibility scanning is only one part of accessibility testing; keyboard, screen-reader, usability, and other manual checks are also important.

## CI/CD

GitHub Actions executes the Playwright suite automatically on pushes and pull requests to the `main` branch.

## Skills demonstrated

`Playwright` · `TypeScript` · `UI Automation` · `API Testing` · `POM` · `E2E Testing` ·  `GitHub Actions` · `CI/CD`

## Note

This is a personal learning and portfolio project. It contains no employer/client code, confidential data, or personal credentials.
