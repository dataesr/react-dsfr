import { Story } from '@storybook/react/types-6-0';

import Summary, { SummaryProps } from './Summary';
import SummaryItem from './SummaryItem';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/sommaire

export default {
  title: 'Composants/Sommaire - Summary',
  component: Summary,
  subcomponent: { SummaryItem },
  parameters: {
    docs: {
      description: {
        component: 'Le sommaire permet aux utilisateurs d’avoir un aperçu du contenu et de naviguer entre les différentes sections d’une page.',
      },
    },
  },
};

const Template: Story<SummaryProps> = (args) => <Summary {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sommaire',
  children: [<SummaryItem href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem href="www.verslecontenu.com">Contenu</SummaryItem>],
};
Default.storyName = 'Sommaire classique';

export const SummaryWithExternalLink = Template.bind({});
SummaryWithExternalLink.args = {
  title: 'Sommaire',
  children: [<SummaryItem target="_blank" href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem target="_blank" href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem target="_blank" href="www.verslecontenu.com">Contenu</SummaryItem>, <SummaryItem target="_blank" href="www.verslecontenu.com">Contenu</SummaryItem>],
};
SummaryWithExternalLink.storyName = "Sommaire avec liens vers l'extérieur";
