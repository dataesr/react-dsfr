import React from 'react';

import {
  Share, ShareButton,
} from '@dataesr/react-dsfr';

const ShareExampla = () => {
  const onClickFacebook = () => {
    window.open(
      'https://www.facebook.com/sharer.php',
      'Partager sur Facebook',
      'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450',
    );
  };

  const onClickTwitter = () => {
    window.open(
      'https://twitter.com/intent/tweet',
      'Partager sur Twitter',
      'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420',
    );
  };

  const onClickLinkedin = () => {
    window.open(
      'https://www.linkedin.com/shareArticle',
      'Partager sur Linkedin',
      'toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420',
    );
  };

  const onCopy = () => {
    navigator.clipboard.writeText(window.location);
  };

  return (
    <Share title="Partager la page">
      <ShareButton
        onClick={onClickFacebook}
        type="facebook"
        label="Partager sur facebook"
        href="https://www.facebook.com/sharer.php"
      />
      <ShareButton
        onClick={onClickTwitter}
        type="twitter"
        label="Partager sur twitter"
        href="https://twitter.com/intent/tweet"
      />
      <ShareButton
        onClick={onClickLinkedin}
        type="linkedin"
        label="Partager sur linkedin"
        href="https://www.linkedin.com/shareArticle"
      />
      <ShareButton
        type="mail"
        label="Partager par email"
        href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]"
      />
      <ShareButton type="copy" label={'Copier l\'adresse'} onClick={onCopy} />
    </Share>
  );
};

export default ShareExampla;
