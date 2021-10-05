import React, { useState } from 'react';

import PropTypes from 'prop-types';

import '@gouvfr/dsfr/dist/css/footer.min.css';
import ConsentBanner from './ConsentBanner';
import ConsentModal from './ConsentModal';

const ConsentManager = ({
  isOpen, setIsOpen, bannerTitle, bannerDescription, bannerButtons,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ConsentBanner
        bannerButtons={bannerButtons}
        openConsentModal={setOpen}
        title={bannerTitle}
        description={bannerDescription}
      />
      <ConsentModal isOpen={isOpen || open} setIsOpen={setIsOpen}>
        <p>Test</p>
      </ConsentModal>
    </>
  );
};

ConsentManager.defaultProps = {
  bannerTitle: '',
};

ConsentManager.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  bannerDescription: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
  bannerButtons: PropTypes.arrayOf(PropTypes.shape({
    refuse: PropTypes.shape({ label: PropTypes.string.isRequired }),
    accept: PropTypes.shape({ label: PropTypes.string.isRequired }),
    customize: PropTypes.shape({ label: PropTypes.string.isRequired }),
  })).isRequired,
};

export default ConsentManager;
