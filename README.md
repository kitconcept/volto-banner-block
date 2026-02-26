# Volto Banner Block (@kitconcept/volto-banner-block)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img width="300" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-banner-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-banner-block)
[![Build Status](https://github.com/kitconcept/volto-banner-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-banner-block/actions)
[![Build Status](https://github.com/kitconcept/volto-banner-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-banner-block/actions)
[![Build Status](https://github.com/kitconcept/volto-banner-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-banner-block/actions)

The Volto Banner Block allows editors to add a banner with text to a Volto page.

**This add-on is [volto-light-theme](https://github.com/kitconcept/volto-light-theme) compatible.**

## Screenshot

<img alt="Volto Banner Block" src="https://github.com/user-attachments/assets/dd25c7ac-8231-4ad8-ab7f-53335e9d35ff">

## Screencast

https://github.com/user-attachments/assets/a0b86561-830f-43ca-b47f-88d256894d1d

## Features

- **Banner block** — Registers a `banner` block that allows editors to add a banner with prominent text to a Volto page.
- **volto-light-theme compatible** — Designed to work seamlessly with `@kitconcept/volto-light-theme`.

## Installation

To install your project, you must choose the method appropriate to your version of Volto.

### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-banner-block
cd my-volto-project
```

Add `@kitconcept/volto-banner-block` to your package.json:

```JSON
"addons": [
    "@kitconcept/volto-banner-block"
],

"dependencies": {
    "@kitconcept/volto-banner-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

### Volto 18 and later

Add `@kitconcept/volto-banner-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-banner-block": "*"
}
```

Add `@kitconcept/volto-banner-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-banner-block'];
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.

## Block configuration

This block does not have any configuration options.

## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha).

### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)

### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

<img alt="Deutsches Zentrum für Luft- und Raumfahrt (DLR)" width="200px" src="https://www.dlr.de/static/media/Logo-de.697a8e1f.svg" style="background-color:white">

The development of this plugin has been kindly sponsored by [German Aerospace Center (DLR)](https://dlr.de/de).
