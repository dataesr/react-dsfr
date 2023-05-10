import { Story } from '@storybook/react/types-6-0';
import TagGroup, { TagGroupProps } from './TagGroup';
import Tag from './Tag';

export default {
  title: 'TagGroup',
  component: TagGroup,
  argTypes: {},
  subcomponents: { Tag },
};
const Template: Story<TagGroupProps> = (args) => <TagGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Tag small>
      Tag
    </Tag>,
    <Tag selected>
      Tag
    </Tag>,
    <Tag icon="fr-fi-arrow-right-line">
      Tag
    </Tag>,
    <Tag icon="fr-fi-arrow-right-line" iconPosition="left">
      Tag
    </Tag>,

  ],
};
Default.storyName = 'Groupes de tags';

export const DifferentsSize = Template.bind({});
DifferentsSize.args = {
  children: [
    <Tag
      small
      onClick={() => {}}
    >
      Petit tag
    </Tag>,
    <Tag
      onClick={() => {}}
    >
      Tag
    </Tag>,
    <Tag
      onClick={() => {}}
    >
      Tag
    </Tag>,
  ],
};
DifferentsSize.storyName = 'Tags de différentes tailles';

export const TagsSelected = Template.bind({});
TagsSelected.args = {
  children: [
    <Tag
      selected
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag selectionné
    </Tag>,
    <Tag
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag
    </Tag>,
    <Tag
      selected
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag selectionné
    </Tag>,
    <Tag
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag
    </Tag>,
  ],
};
TagsSelected.storyName = 'Groupes de tags selectionnables';

export const TagsToDismiss = Template.bind({});
TagsToDismiss.args = {
  children: [
    <Tag
      selected
      href="https://www.example.com"
      onClick={() => {}}
      closable
    >
      Tag selectionné
    </Tag>,
    <Tag
      closable
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag
    </Tag>,
    <Tag
      closable
      selected
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag selectionné
    </Tag>,
    <Tag
      closable
      href="https://www.example.com"
      onClick={() => {}}
    >
      Tag
    </Tag>,
  ],
};
TagsToDismiss.storyName = 'Groupes de tags à supprimer';
