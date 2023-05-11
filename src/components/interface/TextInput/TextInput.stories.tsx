import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './TextInput';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie

export default {
  title: 'Composants/Champ de saisie - Input',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'Les champs permettent à un utilisateur d\'entrer du contenu et données. Le champ simple est un champ de saisie libre, qui accepte une courte ligne de contenu (texte ou/ et nombre). Le libellé se trouve au-dessus du champs de saisie, pour faciliter la lecture.',
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label champ de saisie',
};
Default.storyName = 'État par défaut';

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'Label champ de saisie',
  message: 'Texte d\'erreur obligatoire',
  messageType: 'error',
};
ErrorState.storyName = 'État d\'erreur';

export const SuccessState = Template.bind({});
SuccessState.args = {
  label: 'Label champ de saisie',
  message: ' Texte de validation ',
  messageType: 'valid',
};
SuccessState.storyName = 'État de succès';

export const DeactivatedState = Template.bind({});
DeactivatedState.args = {
  disabled: true,
  label: 'Label champ de saisie',
};
DeactivatedState.storyName = 'État désactivé';

export const HelpText = Template.bind({});
HelpText.args = {
  hint: 'Texte de description additionnel',
  label: 'Label champ de saisie',
};
HelpText.storyName = 'Champ avec texte d\'aide';

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'Label champ de saisie',
  textarea: true,
};
TextArea.storyName = 'Zone de texte - Textarea';

export const DateType = Template.bind({});
DateType.args = {
  label: 'Label champ de saisie - Date',
  type: 'date',
};
DateType.storyName = 'Autre type de champs - Date';

export const NumberType = Template.bind({});
NumberType.args = {
  label: 'Label champ de saisie - Nombre',
  type: 'number',
};
NumberType.storyName = 'Autre type de champs - Nombre';

export const PasswordType = Template.bind({});
PasswordType.args = {
  label: 'Label champ de saisie - Mot de passe',
  type: 'password',
};
PasswordType.storyName = 'Autre type de champs - Mot de passe';

export const EmailType = Template.bind({});
EmailType.args = {
  label: 'Label champ de saisie - Email',
  type: 'email',
};
EmailType.storyName = 'Autre type de champs - Email';
