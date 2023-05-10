import { ComponentStory } from '@storybook/react';

import Radio from './Radio';
import RadioGroup from './RadioGroup';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio

export default {
  title: 'Composants/Bouton radio - Radio button',
  component: RadioGroup,
  subcomponents: { Radio },
  argTypes: {},
};

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const VerticalList = Template.bind({});
VerticalList.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  legend: 'Légende pour l\'ensemble des éléments',
};
VerticalList.storyName = 'Liste verticale';

export const HorizontalList = Template.bind({});
HorizontalList.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  isInline: true,
  legend: 'Légende pour l\'ensemble des éléments',
};
HorizontalList.storyName = 'Liste horizontale';

export const HelpTextOnRadioGroup = Template.bind({});
HelpTextOnRadioGroup.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  hint: 'Texte de description additionnel',
  legend: 'Légende pour l\'ensemble des éléments',
};
HelpTextOnRadioGroup.storyName = 'Liste avec texte d\'aide sous le titre de la liste';

export const HelpTextOnRadio = Template.bind({});
HelpTextOnRadio.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" hint="Texte de description additionnel" />,
    <Radio label="Libellé bouton radio" value="1" hint="Texte de description additionnel" />,
    <Radio label="Libellé bouton radio" value="2" hint="Texte de description additionnel" />,
  ],
  legend: 'Légende pour l\'ensemble des éléments',
};
HelpTextOnRadio.storyName = 'Liste avec texte d\'aide sous le libellé de chaque bouton';

export const ErrorStatusVertical = Template.bind({});
ErrorStatusVertical.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  legend: 'Légende pour l\'ensemble des éléments',
  message: 'Texte d\'erreur obligatoire',
  messageType: 'error',
};
ErrorStatusVertical.storyName = 'État d\'erreur pour liste verticale';

export const ErrorStatusHorizontal = Template.bind({});
ErrorStatusHorizontal.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  isInline: true,
  legend: 'Légende pour l\'ensemble des éléments',
  message: 'Texte d\'erreur obligatoire',
  messageType: 'error',
};
ErrorStatusHorizontal.storyName = 'État d\'erreur pour liste horizontale';

export const SuccessStatusVertical = Template.bind({});
SuccessStatusVertical.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  legend: 'Légende pour l\'ensemble des éléments',
  message: 'Texte de validation',
  messageType: 'valid',
};
SuccessStatusVertical.storyName = 'État de succès pour liste verticale';

export const SuccessStatusHorizontal = Template.bind({});
SuccessStatusHorizontal.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  isInline: true,
  legend: 'Légende pour l\'ensemble des éléments',
  message: 'Texte de validation',
  messageType: 'valid',
};
SuccessStatusHorizontal.storyName = 'État de succès pour liste horizontale';

export const Disabled = Template.bind({});
Disabled.args = {
  children: [
    <Radio label="Libellé bouton radio" value="0" />,
    <Radio label="Libellé bouton radio" value="1" />,
    <Radio label="Libellé bouton radio" value="2" />,
  ],
  disabled: true,
  legend: 'Légende pour l\'ensemble des éléments',
};
Disabled.storyName = 'État Désactivé';
