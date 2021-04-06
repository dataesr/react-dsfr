# @dataesr/react-dsfr

:warning: Project is still beta version :hammer:

[![Build & Test](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/dataesr/react-dsfr/actions/workflows/check.yml)

[![NPM](https://img.shields.io/npm/v/react-dsfr.svg)](https://www.npmjs.com/package/react-dsfr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Non-official React version of the official @gouvfr/dsfr Design System. This project aims to offer React components of the official french [Governement Design System](https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476)

## Requirements

* node >=12.13
* npm >=6.14
* React >=17.01

## Install project

```bash
$ yarn
```

## Install library

```bash
$ yarn add @dataesr/react-dsfr
```

## Available scripts

### Library usage

#### Example page

```bash
$ cd example
$ yarn start
```

Visit [http://localhost:3000](http://localhost:3000).

### Npm package

#### Generate and watch dist folder

```bash
$ yarn 
$ yarn start
```


### Styleguide

Complete style guide is developed with [react-styleguidist](https://react-styleguidist.js.org/).

```bash
$ yarn guide
```

Visit [http://localhost:6060](http://localhost:6060).

### Tests

#### Run all tests using react-scripts with watcher option
```bash
$ yarn test:dev
```

#### In Chrome

```bash
$ yarn test:debug
```

Access `about:inspect`

See doc [debugging-tests](https://create-react-app.dev/docs/debugging-tests/)
