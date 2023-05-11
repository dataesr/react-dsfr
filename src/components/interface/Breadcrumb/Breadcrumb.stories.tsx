import { ComponentStory } from '@storybook/react';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane

export default {
  title: 'Composants/Fil d\'Ariane - Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
  parameters: {
    docs: {
      description: {
        component: 'Le fil d\'Ariane est un système de navigation secondaire qui permet à l\'utilisateur de se situer sur le site qu\'il consulte.',
      },
    },
  },
};

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const SimpleBreadcrumb = Template.bind({});
SimpleBreadcrumb.args = {
  children: [
    <BreadcrumbItem href="#">Breadcrumb Item #1</BreadcrumbItem>,
    <BreadcrumbItem href="#">Breadcrumb Item #2</BreadcrumbItem>,
    <BreadcrumbItem>Breadcrumb Item #3</BreadcrumbItem>,
  ],
};
SimpleBreadcrumb.storyName = "File d'ariane";

export const Responsive = Template.bind({});
Responsive.args = {
  label: 'Aria-label',
  buttonLabel: 'Button label',
  children: [
    <BreadcrumbItem href="#">Breadcrumb Item #1</BreadcrumbItem>,
    <BreadcrumbItem href="#">Breadcrumb Item #2</BreadcrumbItem>,
    <BreadcrumbItem>Breadcrumb Item #3</BreadcrumbItem>,
  ],
};
Responsive.storyName = "File d'ariane Responsive";
