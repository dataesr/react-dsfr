import { ComponentStory } from '@storybook/react';

import Stepper from './Stepper';

export default {
  title: 'Composants/Indicateur d\'étapes - Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: 'L\'indicateur d\'étapes permet d\'indiquer à l\'utilisateur où il se trouve dans un formulaire ou dans une démarche.',
      },
    },
  },
};

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const FirstStep = Template.bind({});
FirstStep.args = {
  currentStep: 1,
  currentTitle: 'Titre de l\'étape en cours',
  nextStepTitle: 'Titre de la prochaine étape',
  steps: 4,
};
FirstStep.storyName = 'Indicateur d\'étapes';

export const LastStep = Template.bind({});
LastStep.args = {
  currentStep: 4,
  currentTitle: 'Titre de l\'étape en cours',
  nextStepTitle: 'Titre de la prochaine étape',
  steps: 4,
};
LastStep.storyName = 'Indicateur d\'étapes - Dernière étape';
