import React, { useState } from 'react';
import { ConsentManager, ConsentService } from '@dataesr/react-dsfr';

const ConsentManagerExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  return (
    <ConsentManager
      bannerDescription="Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les
          services disponibles sur ce site. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer."
      bannerTitle="À propos des cookies sur nomdusite.fr"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalTitle="Panneau de gestion des cookies"
      modalCloseLabel="Fermer"
      modalCloseTitle="fermer la modal cookie"
      confirmButtonLabel="Confirmer mes choix"
      isBannerOpen={isBannerOpen}
      bannerButtons={{
        accept: {
          label: 'Tout Accepter',
        },
        refuse: {
          label: 'Tout Refuser',
        },
        customize: {
          label: 'Personnaliser',
        },
      }}
      confirmConsent={() => { setIsBannerOpen(false); }}
      acceptBannerButton={() => { setIsBannerOpen(false); }}
      refuseBannerButton={() => { setIsBannerOpen(false); }}
    >
      <ConsentService
        description=""
        title="Préférences pour tous les services."
        acceptLabel="Tout accepter"
        refuseLabel="Tout refuser"
        acceptValue="accept-all-consent"
        refuseValue="refuse-all-consent"
        consent="accept-all-consent"
      />
      <ConsentService
        description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
        title="Cookies obligatoires"
        acceptLabel="Accepter"
        refuseLabel="Refuser"
        acceptValue="accept-mandatory"
        refuseValue="refuse-mandatory"
        consent="accept-mandatory"
      />
    </ConsentManager>
  );
};

export default ConsentManagerExample;
