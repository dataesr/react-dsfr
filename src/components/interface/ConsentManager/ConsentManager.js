import React, { useState } from 'react';

import PropTypes from 'prop-types';

import '@gouvfr/dsfr/dist/css/footer.min.css';
import ConsentBanner from './ConsentBanner';
import ConsentModal from './ConsentModal';

const ConsentManager = ({
  children,
  isModalOpen,
  setIsModalOpen,
  bannerTitle,
  bannerDescription,
  bannerButtons,
  modalTitle,
  modalCloseLabel,
  modalCloseTitle,
}) => {
  const [open, setOpen] = useState(false);
  const openConsentModal = (v) => {
    setOpen(v);
    setIsModalOpen(v);
  };
  return (
    <>
      <ConsentBanner
        bannerButtons={bannerButtons}
        openConsentModal={openConsentModal}
        title={bannerTitle}
        description={bannerDescription}
      />
      <ConsentModal
        title={modalTitle}
        closeLabel={modalCloseLabel}
        closeTitle={modalCloseTitle}
        isOpen={isModalOpen || open}
        setIsOpen={openConsentModal}
      >
        {children}
      </ConsentModal>
    </>
  );
};

ConsentManager.defaultProps = {
  bannerTitle: '',
};

ConsentManager.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  bannerDescription: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalCloseLabel: PropTypes.string.isRequired,
  modalCloseTitle: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string,
  setIsModalOpen: PropTypes.func.isRequired,
  bannerButtons: PropTypes.shape({
    refuse: PropTypes.shape({ label: PropTypes.string.isRequired }),
    accept: PropTypes.shape({ label: PropTypes.string.isRequired }),
    customize: PropTypes.shape({ label: PropTypes.string.isRequired }),
  }).isRequired,
};

export default ConsentManager;
