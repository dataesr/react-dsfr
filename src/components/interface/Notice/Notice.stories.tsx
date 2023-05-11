import { Story } from '@storybook/react/types-6-0';

import Notice, { NoticeProps } from './Notice';

export default {
  title: "Composants/ Bandeau d'information importante - Notice",
  component: Notice,
  parameters: {
    docs: {
      description: {
        component: 'Le bandeau d’information importante permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.',
      },
    },
  },
};

const Template: Story<NoticeProps> = (args) => <Notice {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Titre du bandeau',
};
Default.storyName = "Bandeau d'information";

export const NotVisible = Template.bind({});
NotVisible.args = {
  title: 'Titre du bandeau',
  visible: false,
};
NotVisible.storyName = "Bandeau d'information invisible";
