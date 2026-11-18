# Demo Web Shop Automation & API Testing

## Project Overview
UI automation of https://demowebshop.tricentis.com/ using Playwright with the Page Object Model (POM),
and API automation of https://jsonplaceholder.typicode.com/users using a Postman collection run via Newman.

UI scenarios:
- Q1: Invalid login
- Q2: Register + add product to cart
- Q3: Search product, add to cart, checkout (E2E order)

API scenarios: GET all users, then PUT update a user (using the saved ID).

## Tech Stack
- Playwright (JavaScript) with Page Object Model
- Allure Report + Playwright HTML Report
- Postman collection + Newman (htmlextra reporter)
- Node.js, Git/GitHub

## Prerequisites
- Node.js LTS
- Git
- Java JDK 11+ (required for Allure report)

## Setup
```bash
git clone https://github.com/esratuljannatjui/demo-webshop-automation.git
cd demo-webshop-automation
npm install
npx playwright install
```

## Run UI Tests
| Scenario | Command |
|---|---|
| Q1 Invalid Login | `npm run test:q1` |
| Q2 Register + Add to Cart | `npm run test:q2` |
| Q3 E2E Order | `npm run test:q3` |
| All three sequentially | `npm test` |

## Generate Reports
After running tests:
```bash
npm run report:html        # opens Playwright HTML report
npm run allure:generate    # generates Allure report
npm run allure:open        # opens Allure report in browser
```
Screenshots are attached to every test in both reports.

## Run API Tests
```bash
npm run api:test
```
The Newman HTML report is saved at `api-tests/report/api-report.html`.

## Run Everything in Sequence
```bash
npm test
npm run allure:generate
npm run api:test
```

## Project Structure
```
api-tests/   Postman collection (users.postman_collection.json)
pages/       Page objects (Login, Home, Register, ProductList, Product, Cart, Checkout)
tests/       Playwright specs (q1, q2, q3)
utils/       Test data helpers
```