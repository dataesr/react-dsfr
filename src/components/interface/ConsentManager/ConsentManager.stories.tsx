import { ComponentStory } from '@storybook/react';

import ConsentManager from './ConsentManager';
import ConsentService from './ConsentService';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/gestionnaire-de-consentement

export default {
  title: 'Composants/Gestionnaire de consentement - Consent banner',
  component: ConsentManager,
  subcomponents: { ConsentService },
};

const Template: ComponentStory<typeof ConsentManager> = (args) => (
  <ConsentManager {...args} />
);

export const SimpleConsentManager = Template.bind({});
SimpleConsentManager.args = {
  bannerDescription:
    'Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.',
  bannerTitle: 'À propos des cookies sur refugies.info',
  bannerButtons: {
    accept: {
      label: 'Tout Accepter',
    },
    refuse: {
      label: 'Tout Refuser',
    },
    customize: {
      label: 'Personnaliser',
    },
  },
  modalTitle: 'Panneau de gestion des cookies',
  modalCloseLabel: 'Fermer',
  modalCloseTitle: 'fermer la modal cookie',
  confirmButtonLabel: 'Confirmer mes choix',

  acceptBannerButton: () => console.log('acceptBannerButton'),
  refuseBannerButton: () => console.log('refuseBannerButton'),
  isModalOpen: false,
  setIsModalOpen: () => console.log('setIsModalOpen'),
  confirmConsent: (value) => console.log('confirmConsent', value),

  children: [
    <ConsentService
      description=""
      name="all"
      title="Préférences pour tous les services."
      acceptLabel="Tout accepter"
      refuseLabel="Tout refuser"
      defaultConsent="refuse"
    />,
    <ConsentService
      description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
      name="mandatory"
      title="Cookies obligatoires"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="accept"
    />,
    <ConsentService
      description="Identifie les visiteurs en provenance de publications Facebook."
      name="facebook"
      title="Facebook Pixel"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="refuse"
    />,
    <ConsentService
      description="Permet d'analyser les statistiques de consultation de notre site."
      name="google_analytics"
      title="Google Analytics"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="accept"
    />,
  ],
};
SimpleConsentManager.storyName = 'ConsentManager';

export const ModalOpenedConsentManager = Template.bind({});
ModalOpenedConsentManager.args = {
  bannerDescription:
    'Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les services disponibles sur ce site. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer.',
  bannerTitle: 'À propos des cookies sur refugies.info',
  bannerButtons: {
    accept: {
      label: 'Tout Accepter',
    },
    refuse: {
      label: 'Tout Refuser',
    },
    customize: {
      label: 'Personnaliser',
    },
  },
  modalTitle: 'Panneau de gestion des cookies',
  modalCloseLabel: 'Fermer',
  modalCloseTitle: 'fermer la modal cookie',
  confirmButtonLabel: 'Confirmer mes choix',

  acceptBannerButton: () => console.log('acceptBannerButton'),
  refuseBannerButton: () => console.log('refuseBannerButton'),
  isModalOpen: true,
  setIsModalOpen: (value) => console.log('setIsModalOpen', value),
  confirmConsent: (value) => console.log('confirmConsent', value),
  isBannerOpen: false,

  children: [
    <ConsentService
      description=""
      name="all"
      title="Préférences pour tous les services."
      acceptLabel="Tout accepter"
      refuseLabel="Tout refuser"
      defaultConsent="refuse"
      onChange={(e) => console.log('onChange', e)}
    />,
    <ConsentService
      acceptLabel="Accepter"
      defaultConsent="accept"
      description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
      disabled
      name="mandatory"
      refuseLabel="Refuser"
      title="Cookies obligatoires"
      value="accept"
    />,
    <ConsentService
      description="Identifie les visiteurs en provenance de publications Facebook."
      name="facebook"
      title="Facebook Pixel"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="refuse"
    />,
    <ConsentService
      description="Permet d'analyser les statistiques de consultation de notre site."
      name="google_analytics"
      title="Google Analytics"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="accept"
    />,
    <ConsentService
      description="Permet d'analyser les statistiques de consultation de notre site."
      name="youtube"
      title="Youtube"
      acceptLabel="Accepter"
      refuseLabel="Refuser"
      defaultConsent="refuse"
      value="accept"
    />,
  ],
};
ModalOpenedConsentManager.storyName = 'ConsentManagerModalOpen';
