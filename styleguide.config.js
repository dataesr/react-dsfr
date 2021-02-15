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
      linkHover: '#8F9779'
    },
    fontFamily: {
      base: '"Calibri", "Geneva", sans-serif'
    }
  },
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
      content: './README.md',
      sectionDepth: 0,
    },
    {
      name: 'Composants',
      sectionDepth: 1,
      content: 'docs/COMPONENTS.md',
      components: 'src/components/**/[A-Z]*.js',
    },
  ],
};
