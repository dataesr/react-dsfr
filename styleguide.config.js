const path = require('path');
module.exports = {
  title: 'react-rfds',
  styleguideDir: 'build',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  components: 'src/components/**/[A-Z]*.js',
  usageMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/Wrapper')
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@dataesr/react-rfds';`;
  },
  sections: [
    {
      name: 'Getting started',
      content: 'docs/GETTING-STARTED.md',
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
  ],
};
