# Cypress

## main testing branch

- https://github.com/kentcdodds/jest-cypress-react-babel-webpack/tree/egghead-2018/cypress-00

## Adding Cypress testing library to Cypress

- config: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-04/cypress/support/index.js
- tests: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-04/cypress/e2e/calculator.js

## Generating Fake user

- user config: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-06/cypress/support/generate.js
- tests: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-06/cypress/e2e/register.js

## Cypress Driven Development

Because Cypress allows you to use all the developer tools you’re used to from Google Chrome, you can actually use Cypress as your main application development workflow. If you’ve ever tried to develop a feature that required you to be in a certain state you’ve probably felt the pain of repeatedly refreshing the page and clicking around to get into that state. Instead, you can use cypress to do that and developer your application entirely in Cypress.

## Cypress Server Simulate Http

Normally I prefer to test error states using integration or unit tests, but there are some situations where it can be really useful to mock out a response to test a specific scenario in an E2E test. Let’s use the cypress server and route commands to mock a response from our registration request to test the error state.

- tests: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-08/cypress/e2e/register.js

## Create a User with cy.request from Cypress

We’re duplicating a lot of logic between our registration and login tests and not getting any additional confidence, so lets reduce the duplicate logic and time in our tests using cy.request to get a user registered rather than clicking through the application to register a new user.

- test: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-10/cypress/e2e/login.js

## Keep Tests Isolated and Focused with Custom Cypress Commands

We’re going to need a newly created user for several tests so let’s move our cy.request command to register a new user into a custom Cypress command so we can use that wherever we need a new us

- cypress-command: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-11/cypress/support/commands.js
- test: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-11/cypress/e2e/login.js

## Use Custom Cypress Command for Reusable Assertions

- commands: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-12/cypress/support/commands.js
- tests: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-12/cypress/e2e/login.js

## Use cy.request from Cypress to Authenticate as a New User

- authenticated calculator: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-14/cypress/e2e/calculator.js

## Use a Custom Cypress Command to Login as a User

It’s pretty likely that we’ll need to login as a particular user for many tests, let’s take our cy.request command and turn it into a custom command to make it easier for the places we’ll be needing a logged in user.

- tests: https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-15/cypress/e2e/calculator.js

## Install React DevTools with Cypress

Because Cypress runs in a real Chrome browser, we can install extensions, like React DevTools. The tricky bit will be to make our application hook up to the extension properly.

- https://github.com/kentcdodds/jest-cypress-react-babel-webpack/blob/tjs/cypress-17/public/index.html
