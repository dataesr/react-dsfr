const path = require('path');

module.exports = {
  title: 'react-rfds',
  styleguideDir: 'build',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  components: 'src/components/**/[A-Z]*.js',
  usageMode: 'collapse',
  theme: {
    color: {
      link: '#3B7A57',
      linkHover: '#8F9779',
    },
    fontFamily: {
      base: '"Calibri", "Geneva", sans-serif',
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/Wrapper'),
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@dataesr/react-rfds';`;
  },
  sections: [
    {
      name: 'Getting started',
      content: './README.md',
      sectionDepth: 0,
    },
    {
      name: 'Fondamentaux',
      sectionDepth: 1,
      content: 'docs/FONDAMENTAUX.md',
      components: 'src/foundation/**/[A-Z]*.js',
    },
    {
      name: 'Composants',
      sectionDepth: 1,
      content: 'docs/COMPONENTS.md',
      components: 'src/components/**/[A-Z]*.js',
    },
    {
      name: 'Fondamentaux',
      sectionDepth: 1,
      content: 'docs/FONDAMENTAUX.md',
      sections: [
        {
          name: 'Système de grille -- Grid',
          content: 'docs/GRID.md',
          components: 'src/foundation/**/[A-Z]*.js',
        },
      ],
    },
  ],
};
