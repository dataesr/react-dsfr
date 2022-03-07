# @dataesr/react-dsfr

:warning: beta version :hammer:


[![NPM](https://img.shields.io/npm/v/@dataesr/react-dsfr.svg)](https://www.npmjs.com/package/@dataesr/react-dsfr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![GitHub contributors](https://img.shields.io/github/contributors-anon/dataesr/react-dsfr?color=%23E52B50%20)

[![Build & Test](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml) ![GitHub last commit](https://img.shields.io/github/last-commit/dataesr/react-dsfr?color=purple)


> Non-official React components of the official french [Système de Design de l'État](https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476).

Current version is using [@gouvfr/dsfr@1.1.0](https://www.npmjs.com/package/@gouvfr/dsfr)

## Requirements

* node >= 12.13
* npm >= 6.14
* React >= 17.01

## Installation

```bash
yarn add @dataesr/react-dsfr
```

## Library usage

### Styleguide

Styleguide gives you access to the list of props needed and a working example for each component available in the library. To launch it on your local machine:

```bash
yarn guide
```
Visit [http://localhost:6060](http://localhost:6060).

The complete styleguide is available online [https://dataesr.github.io/react-dsfr/](https://dataesr.github.io/react-dsfr/).

#### Example page

> A playground to test components

An example page is available containing all components. To launch it on your local machine, first [launch watcher of the project](#generate-and-watch-dist-folder-containing-bundles) and then:

```bash
cd example
npm install 
npm start
```

#### Use Icons

We are using [remixicon](https://remixicon.com/).

:warning: CDN link of css must be added to the `<head>` of your website.

`<link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">`

#### Help from outside

Thanks to the internet world.

* [How to build, test and release a node module in ES6 ](https://dev.to/whitep4nth3r/how-to-build-test-and-release-a-node-module-in-es6-296b)

* [How to create an npm library from react components](https://dev.to/jimjunior/how-to-create-an-npm-library-from-react-components-2m2)

### Unit tests

#### Run all tests using react-scripts with watcher option

```bash
yarn test:dev
```

#### Accessibility

Components can be tested in Example's page `App.js` with [@axe-core/react](https://www.npmjs.com/package/@axe-core/react)

```bash
npm install --save-dev @axe-core/react
```

Another solution to test accessibility is CLI module [https://pa11y.org/](https://pa11y.org/)

Check configuration file `.pa11y-ci`

```bash
npm install -g pa11y-ci
pa11y-ci
```

#### In Chrome

```bash
yarn test:debug
```

Access `about:inspect`

See doc [debugging-tests](https://create-react-app.dev/docs/debugging-tests/)

### They use react-dsfr and we like it!

[santepsy.etudiant.gouv.fr](https://santepsy.etudiant.gouv.fr/)

### Release policy

The `@dataesr/react-dsfr` package is published with [semantic-release](https://github.com/semantic-release/semantic-release).

Merging code on the `master` branch will automatically bump the version, produce a changelog, and publish a new release if new semantic commits are found (commit message prefixed with `fix: ` or `feat: `). See [Commit message formats](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) for more details.

