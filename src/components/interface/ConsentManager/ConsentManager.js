import React, { useState } from 'react';

import PropTypes from 'prop-types';

import ConsentBanner from './ConsentBanner';
import ConsentModal from './ConsentModal';
import './consentManager.css';

const ConsentManager = ({
  children,
  isModalOpen,
  setIsModalOpen,
  bannerTitle,
  bannerDescription,
  bannerButtons,
  modalTitle,
  modalCloseLabel,
  confirmButtonTitle,
  confirmButtonLabel,
  confirmConsent,
  refuseBannerButton,
  acceptBannerButton,
  modalCloseTitle,
  isBannerOpen,
}) => {
  const [open, setOpen] = useState(false);
  const openConsentModal = (v) => {
    setOpen(v);
    setIsModalOpen(v);
  };
  const manageDataConsent = (service) => {
    const consentValue = service.map((c) => {
      const input = c.ref.current.querySelector('input');
      return input.checked ? input.value : '';
    });

    confirmConsent(consentValue);
    openConsentModal(false);
  };
  return (
    <>
      {isBannerOpen && (
      <ConsentBanner
        acceptBannerButton={acceptBannerButton}
        refuseBannerButton={refuseBannerButton}
        bannerButtons={bannerButtons}
        openConsentModal={openConsentModal}
        title={bannerTitle}
        description={bannerDescription}
      />
      )}
      <ConsentModal
        confirmConsent={manageDataConsent}
        confirmButtonLabel={confirmButtonLabel}
        confirmButtonTitle={confirmButtonTitle}
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
  confirmButtonLabel: 'Confirmer',
  confirmButtonTitle: 'Confirmer',
  isBannerOpen: true,
};

ConsentManager.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isBannerOpen: PropTypes.bool,
  confirmButtonLabel: PropTypes.string,
  confirmButtonTitle: PropTypes.string,
  bannerDescription: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalCloseLabel: PropTypes.string.isRequired,
  modalCloseTitle: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string,
  setIsModalOpen: PropTypes.func.isRequired,
  confirmConsent: PropTypes.func.isRequired,
  refuseBannerButton: PropTypes.func.isRequired,
  acceptBannerButton: PropTypes.func.isRequired,
  bannerButtons: PropTypes.shape({
    refuse: PropTypes.shape({ label: PropTypes.string.isRequired }),
    accept: PropTypes.shape({ label: PropTypes.string.isRequired }),
    customize: PropTypes.shape({ label: PropTypes.string.isRequired }),
  }).isRequired,
};

export default ConsentManager;
