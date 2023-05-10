import { ComponentStory } from '@storybook/react';

import Pagination from './Pagination';
import PaginationItem from './PaginationItem';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pagination/

export default {
  title: 'Composants/Pagination - Pagination',
  component: Pagination,
  subcomponents: { PaginationItem },
  parameters: {
    docs: {
      description: {
        component: 'La pagination permet à l\'utilisateur de naviguer entre les différentes pages d\'une liste d\'éléments.',
      },
    },
  },
};

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const PaginationSimple = Template.bind({});
PaginationSimple.args = {
  currentPage: 1,
  pageCount: 20,
};
PaginationSimple.storyName = 'Simple';

export const PaginationButtonLabels = Template.bind({});
PaginationButtonLabels.args = {
  currentPage: 1,
  buttonLabels: {
    currentAria: 'currentAria',
    firstAria: 'firstAria',
    lastAria: 'lastAria',
    navigationAria: 'navigationAria',
    nextAria: 'nextAria',
    nextLabel: 'nextLabel',
    pageAria: (page) => `Page ${page}`,
    prevAria: 'prevAria',
    prevLabel: 'prevLabel',
  },
  pageCount: 20,
};
PaginationButtonLabels.storyName = 'Labels des boutons';

export const PaginationClick = Template.bind({});
PaginationClick.args = {
  currentPage: 1,
  // eslint-disable-next-line no-console
  onClick: () => console.log('click'),
  pageCount: 20,
};
PaginationClick.storyName = 'Evènement clic';

export const PaginationAnchor = Template.bind({});
PaginationAnchor.args = {
  anchorAs: 'a',
  currentPage: 1,
  pageCount: 20,
};
PaginationAnchor.storyName = 'Ancre';

export const PaginationBuildURL = Template.bind({});
PaginationBuildURL.args = {
  buildURL: (index: any) => `this is an url ${index}`,
  currentPage: 1,
  pageCount: 20,
};
PaginationBuildURL.storyName = 'Construction d\'URL';

export const PaginationSurrendingPages = Template.bind({});
PaginationSurrendingPages.args = {
  currentPage: 7,
  pageCount: 20,
  surrendingPages: 3,
};
PaginationSurrendingPages.storyName = 'Nombres de pages affichées de chaque côté';
