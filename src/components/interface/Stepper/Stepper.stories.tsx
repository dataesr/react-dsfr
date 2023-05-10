import { ComponentStory } from '@storybook/react';

import Stepper from './Stepper';

export default {
  title: 'Composants/Stepper',
  component: Stepper,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "L'indicateur d'étapes permet à l'utilisateur de se repérer dans un formulaire.",
      },
    },
  },
};

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const FirstStep = Template.bind({});
FirstStep.args = {
  steps: 4,
  currentStep: 1,
  currentTitle: 'Titre de l\'étape en cours',
  nextStepTitle: 'Titre de la prochaine étape',
};
FirstStep.storyName = "Indicateur d'étapes";

export const LastStep = Template.bind({});
LastStep.args = {
  steps: 4,
  currentStep: 4,
  currentTitle: 'Titre de l\'étape en cours',
  nextStepTitle: 'Titre de la prochaine étape',
};
LastStep.storyName = "Indicateur d'étapes - Dernière étape";
