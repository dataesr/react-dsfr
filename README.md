# @dataesr/react-dsfr

[![NPM](https://img.shields.io/npm/v/@dataesr/react-dsfr.svg)](https://www.npmjs.com/package/@dataesr/react-dsfr) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![GitHub contributors](https://img.shields.io/github/contributors-anon/dataesr/react-dsfr?color=%23E52B50%20)

[![Tests](https://github.com/dataesr/react-dsfr/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/dataesr/react-dsfr/actions/workflows/tests.yml) ![GitHub last commit](https://img.shields.io/github/last-commit/dataesr/react-dsfr?color=purple)


> Non-official React components of the official french [Système de Design de l'État](https://gouvfr.atlassian.net/wiki/spaces/DB/overview?homepageId=145359476).

Current version is using [@gouvfr/dsfr@1.3.1](https://www.npmjs.com/package/@gouvfr/dsfr)

## Requirements

* node >= 14.1x
* npm >= 6.1x
* React >= 17.0.x

## Installation

```bash
yarn add @dataesr/react-dsfr
```
or 
```bash
npm install @dataesr/react-dsfr
```

## Library usage

### Styleguide

Styleguide gives you access to the list of props needed and a working example for each component available in the library. To launch it on your local machine:

```bash
npm run guide
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

```
 <Icon
    name="ri-bubble-chart-line"
    size="lg"
    color="#f88"
    iconPosition="right"
>
    <p>I have an icon</p>
</Icon>
```

:warning: CDN link of css must be added to the `<head>` of your website.

```
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
```

#### Use Colors

Color variables are available in `style/color.css`. To make a new component dark theme compatible it's recommended to use variables from `scheme.css` in [@gouvfr/dsfr project](https://www.npmjs.com/package/@gouvfr/dsfr)

Some components can be colored with variables (see `colorFamily` props) listed below:
```
['green-tilleul-verveine', 'green-bourgeon', 'green-emeraude', 'green-menthe', 'green-archipel', 'blue-ecume', 'blue-cumulus', 'purple-glycine', 'pink-macaron', 'pink-tuile', 'yellow-tournesol', 'yellow-moutarde', 'orange-terre-battue', 'brown-cafe-creme', 'brown-caramel', 'brown-opera', 'beige-gris-galet']
```

#### Help from outside

Thanks to the internet world.

* [How to build, test and release a node module in ES6 ](https://dev.to/whitep4nth3r/how-to-build-test-and-release-a-node-module-in-es6-296b)

* [How to create an npm library from react components](https://dev.to/jimjunior/how-to-create-an-npm-library-from-react-components-2m2)

### Unit tests

#### Run all tests using react-scripts with watcher option

```bash
npm run test:dev
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
npm run test:debug
```

Access `about:inspect`

See doc [debugging-tests](https://create-react-app.dev/docs/debugging-tests/)

### publish package

```
 npm i --package-lock-only
 npm publish --tag latest --access public
```

### They use react-dsfr and we like it!

* [santepsy.etudiant.gouv.fr](https://santepsy.etudiant.gouv.fr)
* [DashLord](https://dashlord.incubateur.net)
* [Baromètre de la Science Ouverte](https://barometredelascienceouverte.esr.gouv.fr)
* [Enfants du spectacle](https://enfants-du-spectacle.fabrique.social.gouv.fr)
* [Mon Psy](https://monpsy.sante.gouv.fr)
* [Transitions collectives](https://transitions-collectives.fabrique.social.gouv.fr)
* [Immersion facile](https://immersion-facile.beta.gouv.fr)
* [Bilans climat simplifiés](https://bilans-climat-simplifies.ademe.fr)
* [Zero logement vacant](https://zerologementvacant.beta.gouv.fr)

### TODO
* components v1.4
  * bouton tertiaire
  * bouton FranceConnect
  * retour en haut de page
* To limit usage of colors to colorFamilies
* Add StoryBook
