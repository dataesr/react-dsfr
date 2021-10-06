Le bandeau permet le recueil du consentement des utilisateurs à l’arrivée sur le site. Ce doit être le premier élément sélectionné lors de la navigation au clavier. Il est faut donc le placer en première position dans le DOM, juste après la balise <body> (et avant les liens d'évitement).

```jsx

import ConsentManager  from '.';

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
      confirmConsent={() => {}}
      bannerButtonRefuse={() => {}}
      bannerButtonAccept={() => {}}
    >
      <ConsentService
        description=""
        title="Préférences pour tous les services."
        acceptButtonLabel="Tout accepter"
        refuseButtonLabel="Tout refuser"
        acceptValue="accept-all-consent"
        refuseValue="refuse-all-consent"
        consent="accept-all-consent"
      />
      <ConsentService
        description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
        title="Cookies obligatoires"
        acceptButtonLabel="Accepter"
        refuseButtonLabel="Refuser"
        acceptValue="accept-mandatory"
        refuseValue="refuse-mandatory"
        consent="accept-mandatory"
      />
    </ConsentManager>
```
