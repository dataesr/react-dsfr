import React, { useState } from 'react';
import { ConsentManager } from '@dataesr/react-dsfr';

const ConsentManagerExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ConsentManager
      bannerDescription="Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience et les
          services disponibles sur ce site. Vous pouvez, à tout moment, avoir le contrôle sur les cookies que vous souhaitez activer."
      bannerTitle="À propos des cookies sur nomdusite.fr"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
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
    />
  );
};

export default ConsentManagerExample;
