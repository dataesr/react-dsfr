Le bandeau permet le recueil du consentement des utilisateurs à l’arrivée sur le site. Ce doit être le premier élément sélectionné lors de la navigation au clavier. Il est faut donc le placer en première position dans le DOM, juste après la balise <body> (et avant les liens d'évitement).

```jsx

import ConsentManager  from '.';

const [isModalOpen, setIsModalOpen] = useState(false);
const [isBannerOpen, setIsBannerOpen] = useState(true);

<ConsentManager
    bannerDescription="Bienvenue ! Nous utilisons des cookies pour améliorer votre expérience utilisateur"
    bannerTitle="À propos des cookies sur dataesr/react-dsfr.fr"
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
    refuseBannerButton={() => { setIsBannerOpen(false); }}
    acceptBannerButton={() => { setIsBannerOpen(false); }}
>
    <ConsentService
        description=""
        title="Préférences pour tous les services."
        acceptLabel="Tout accepter"
        refuseLabel="Tout refuser"
        defaultConsent="refuse"
    />
    <ConsentService
        description="Ce site utilise des cookies nécessaires à son bon fonctionnement qui ne peuvent pas être désactivés."
        title="Cookies obligatoires"
        acceptLabel="Accepter"
        refuseLabel="Refuser"
        defaultConsent="accept"
    />
</ConsentManager>
```
