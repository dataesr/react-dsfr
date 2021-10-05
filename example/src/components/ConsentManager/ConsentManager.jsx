import React, { useState } from 'react';
import { ConsentManager, ConsentService } from '@dataesr/react-dsfr';

const ConsentManagerExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    >
      <ConsentService
        description=""
        title="Préférences pour tous les services."
        acceptButtonLabel="Tout accepter"
        refuseButtonLabel="Tout refuser"
      />
      <ConsentService
        description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
        title="Cookies obligatoires"
        acceptButtonLabel="Accepter"
        refuseButtonLabel="Refuser"
      />
    </ConsentManager>
  );
};

export default ConsentManagerExample;
