# Playwright Automated Test Suite

This repository contains end-to-end (E2E) automated web tests built using **Playwright**.

## Prerequisites

Before setting up the project, ensure you have the following installed:

* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher (or `yarn` / `pnpm`)
* **Git**

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright Browsers:**
   Download the supported browser binaries (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install
   ```
   *(Optional) To install OS-level dependencies alongside browsers (recommended for Linux/CI):*
   ```bash
   npx playwright install --with-deps
   ```

4. **Configure Environment Variables:**
   Copy the example environment file and customize your variables:
   ```bash
   cp .env.example .env
   ```

---

## Running Tests

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Runs all tests headlessly across all configured browsers |
| `npx playwright test --headed` | Runs tests in headed mode (opens browser UI) |
| `npx playwright test --ui` | Launches Playwright's interactive UI mode |
| `npx playwright test --project=chromium` | Runs tests only on Chromium / Chrome |

---

## Test Reports & Debugging

* **View HTML Report:**
  ```bash
  npx playwright show-report
  ```
* **Debug Mode:**
  ```bash
  npx playwright test --debug
  ```
* **Trace Viewer:**
  ```bash
  npx playwright show-trace trace.zip
  ```
