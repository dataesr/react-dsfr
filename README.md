# @dataesr/react-dsfr

:warning: beta version :hammer:


[![NPM](https://img.shields.io/npm/v/@dataesr/react-dsfr.svg)](https://www.npmjs.com/package/@dataesr/react-dsfr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![GitHub contributors](https://img.shields.io/github/contributors-anon/dataesr/react-dsfr?color=%23E52B50%20)

[![Build & Test](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml) ![GitHub last commit](https://img.shields.io/github/last-commit/dataesr/react-dsfr?color=purple)


> Non-official React components of the official [French Governement Design System](https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476).

Current version is using [@gouvfr/dsfr@1.0.0-rc1.0](https://www.npmjs.com/package/@gouvfr/dsfr)

## Requirements

* node >=12.13
* npm >=6.14
* React >=17.01

## Installation

```bash
$ yarn add @dataesr/react-dsfr
```

## Library usage

### Styleguide

Styleguide gives you access to the list of props needed and a working example for each component available in the library. To launch it on your local machine:

```bash
$ yarn guide
```
Visit [http://localhost:6060](http://localhost:6060).

The complete styleguide is available online [https://dataesr.github.io/react-dsfr/](https://dataesr.github.io/react-dsfr/).

### Npm package

#### Generate /dist folder containing bundles

> [Rollupjs](https://www.rollupjs.org/guide/en/) is used to bundle files. cf config in `rollup.config.js`

```bash
$ npm login
$ npm publish [--tag <tag>] [--access <public|restricted>]
```

#### Generate and watch /dist folder containing bundles
```bash
$ yarn 
$ yarn start
```

#### Example page

> A playground to test components

An example page is available containing all components. To launch it on your local machine, first launch watcher of the project (see above) and then:

```bash
$ cd example/
$ yarn 
$ yarn start
```

#### Publish it

First update the version in `package.json`

```bash
$ npm publish --tag [latest] --access public
```

Visit [http://localhost:3000](http://localhost:3000).

#### Test your node module before you publish 

```bash
$ npm link @dataesr/react-dsfr
```

#### Help

[How to build, test and release a node module in ES6 ](https://dev.to/whitep4nth3r/how-to-build-test-and-release-a-node-module-in-es6-296b)
[How to create an npm library from react components](https://dev.to/jimjunior/how-to-create-an-npm-library-from-react-components-2m2)

### Tests

#### Run all tests using react-scripts with watcher option

```bash
$ yarn test:dev
```

#### Accessibility

Components can be tested in Example's page `App.js` with [@axe-core/react](https://www.npmjs.com/package/@axe-core/react)

```bash
$ npm install --save-dev @axe-core/react
```

An other solution to test accessibility is CLI module [https://pa11y.org/](https://pa11y.org/)

Check configuration file `.pa11y-ci`

```bash
$ npm install -g pa11y-ci
$ pa11y-ci
```

#### In Chrome

```bash
$ yarn test:debug
```

Access `about:inspect`

See doc [debugging-tests](https://create-react-app.dev/docs/debugging-tests/)

### They use react-dsfr

[santepsy.etudiant.gouv.fr](https://santepsy.etudiant.gouv.fr/)
