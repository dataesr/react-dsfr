import { Story } from '@storybook/react/types-6-0';

import Tag, { TagProps } from './Tag';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag

export default {
  title: 'Tag - Tag',
  component: Tag,
  argTypes: {},
};

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Votre texte',
};
Default.storyName = 'Tag';

export const Small = Template.bind({});
Small.args = {
  children: 'petit',
  small: true,
};
Small.storyName = 'Tag petit';

export const Selected = Template.bind({});
Selected.args = {
  children: 'Tag selectionné',
  selected: true,
};
Selected.storyName = 'Tag selectionné';

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Avec icône',
  icon: 'fr-fi-arrow-right-line',
};
WithIcon.storyName = 'Tag avec icône';

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  children: 'Tag avec icône à gauche',
  icon: 'fr-fi-arrow-right-line',
  iconPosition: 'left',
};
WithLeftIcon.storyName = 'Tag avec icône à gauche';

export const WithLink = Template.bind({});
WithLink.args = {
  children: 'Tag avec lien',
  href: 'https://www.example.com',
};
WithLink.storyName = 'Tag avec lien';

export const Rel = Template.bind({});
Rel.args = {
  children: "Tag avec lien vers l'exterieur",
  href: 'https://www.example.com',
  target: '_blank',
};
Rel.storyName = "Tag avec lien vers l'exterieur";

export const Colored = Template.bind({});
Colored.args = {
  children: 'Tag coloré',
  colorFamily: 'green-bourgeon',
};
Colored.storyName = 'Tag coloré';

export const Dismiss = Template.bind({});
Dismiss.args = {
  children: 'Tag supprimable',
  closable: true,
};
Dismiss.storyName = 'Tag supprimable';

export const ALT = Template.bind({});
ALT.args = {
  children: 'Accessibilité',
  href: 'https://www.example.com',
  title: 'Vers le site : https://www.example.com',
};
ALT.storyName = 'Tag accessible';
