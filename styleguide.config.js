const path = require('path');

module.exports = {
  title: 'react-rfds',
  styleguideDir: 'build',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  components: 'src/components/**/[A-Z]*.js',
  usageMode: 'collapse',
  tocMode: 'collapse',
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
      sectionDepth: 2,
      content: 'src/foundation/FOUNDATION.md',
      sections: [
        {
          name: 'Grid system',
          content: 'src/foundation/grid/GRID.md',
          components: 'src/foundation/grid/**/[A-Z]*.js',
        },
        {
          name: 'Typography',
          content: 'src/foundation/typography/TYPOGRAPHY.md',
          components: 'src/foundation/typography/**/[A-Z]*.js',
        },
        {
          name: 'Icons',
          content: 'src/foundation/icons/ICONS.md',
          components: 'src/foundation/icons/**/[A-Z]*.js',
        },
      ],
    },
    {
      name: 'Composants',
      sectionDepth: 1,
      content: 'src/components/COMPONENTS.md',
      components: 'src/components/**/[A-Z]*.js',
    },
    {
      name: 'Hooks',
      sectionDepth: 1,
      content: 'src/hooks/HOOKS.md',
      components: 'src/hooks/**/[A-Z]*.js',
    },
  ],
};
