const path = require('path');

module.exports = {
  title: '@dataesr/react-dsfr',
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
    },
    fontFamily: {
      base: "'Marianne', sans-serif",
    },
  },
  template: { favicon: 'https://raw.githubusercontent.com/dataesr/react-dsfr/master/favicon.ico' },
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/Wrapper'),
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@dataesr/react-dsfr';`;
  },
  sections: [
    {
      name: '',
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
              content: 'src/components/foundation/grid/Grid.md',
              components: 'src/components/foundation/grid/**/[A-Z]*.js',
            },
            {
              name: 'Icons',
              content: 'src/components/foundation/icon/Icons.md',
              components: 'src/components/foundation/icon/**/[A-Z]*.js',
            },
            {
              name: 'Medias',
              content: 'src/components/foundation/media/MEDIA.md',
              components: 'src/components/foundation/media/**/[A-Z]*.js',
            },
            {
              name: 'Typographie',
              content: 'src/components/foundation/typography/TYPOGRAPHY.md',
              components: 'src/components/foundation/typography/**/[A-Z]*.js',
            },
          ],
        },
        {
          name: 'Élements d\'interface',
          content: 'src/components/interface/INTERFACE.md',
          sectionDepth: 1,
          components: 'src/components/interface/**/[A-Z]*.js',
        },
      ],
    },
  ],
};
