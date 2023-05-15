import { Story } from '@storybook/react/types-6-0';

import Skiplinks, { SkiplinksProps } from './Skiplinks';
import SkiplinkItem from './SkiplinkItem';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lien-d-evitement

export default {
  title: "Composants/Lien d'évitement - Skiplink",
  component: Skiplinks,
  subcomponent: { SkiplinkItem },
  parameters: {
    docs: {
      description: {
        component: "Les liens d’évitement permettent aux utilisateurs naviguant au clavier, ou équipés de lecteurs d'écran, d’accéder plus rapidement à des zones précises de la page.",
      },
    },
  },
};

const Template: Story<SkiplinksProps> = (args) => <Skiplinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<SkiplinkItem href="www.verslecontenu.com">Contenu</SkiplinkItem>, <SkiplinkItem href="www.menu.com">Vers le menu</SkiplinkItem>, <SkiplinkItem href="www.recherche.com">Recherche</SkiplinkItem>, <SkiplinkItem href="www.footer.com">Vers le footer</SkiplinkItem>],
};
Default.storyName = "Liens d'évitement par défaut";
