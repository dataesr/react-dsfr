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
      link: '#000091',
      linkHover: '#8F9779',
      codeComment: '#6d6d6d',
      codePunctuation: '#999',
      codeProperty: '#905',
      codeDeleted: '#905',
      codeString: '#690',
      codeInserted: '#690',
      codeOperator: '#9a6e3a',
      codeKeyword: '#1673b1',
      codeFunction: '#DD4A68',
      codeVariable: '#e90'
    },
    fontFamily: {
      base: "'Marianne', sans-serif",
    },
  },
  template: { favicon: 'https://raw.githubusercontent.com/dataesr/react-rfds/master/favicon.ico' },
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
      name: 'Pour commencer',
      content: './README.md',
      sectionDepth: 0,
    }, {
      name: 'Composants',
      content: 'src/components/COMPONENTS.md',
      sectionDepth: 2,
      sections: [
        {
          name: 'Fondamentaux',
          content: 'src/components/foundation/FOUNDATION.md',
          sectionDepth: 1,
          sections: [
            {
              name: 'Grid system',
              content: 'src/components/foundation/grid/GRID.md',
              components: 'src/components/foundation/grid/**/[A-Z]*.js',
            },
            {
              name: 'Typography',
              content: 'src/components/foundation/typography/TYPOGRAPHY.md',
              components: 'src/components/foundation/typography/**/[A-Z]*.js',
            },
            {
              name: 'Icons',
              content: 'src/components/foundation/icons/ICONS.md',
              components: 'src/components/foundation/icons/**/[A-Z]*.js',
            },
          ],
        },
        {
          name: 'Elements d\'interface',
          content: 'src/components/interface/INTERFACE.md',
          sectionDepth: 1,
          components: 'src/components/interface/**/[A-Z]*.js',
        },
      ],
    },
    {
      name: 'Hooks',
      sectionDepth: 1,
      content: 'src/hooks/HOOKS.md',
      components: 'src/hooks/**/use*.js',
    },
  ],
};
