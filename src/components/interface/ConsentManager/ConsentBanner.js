import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import { Button } from '../Button';

const ConsentBanner = ({
  className,
  openConsentModal,
  title,
  description,
  bannerButtons,
  acceptBannerButton,
  refuseBannerButton,
  ...remainingProps
}) => {
  const _className = classNames('fr-consent-banner', className);

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      {title && <p className="fr-h6 fr-mb-3v">{title}</p>}
      <div className="fr-consent-banner__content">
        <p className="fr-text--sm">
          {description}
        </p>
      </div>
      <ul className="fr-consent-banner__buttons fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-sm">
        <li>
          <Button
            data-testid="button-accept"
            onClick={acceptBannerButton}
            title={bannerButtons.accept.label}
          >
            {bannerButtons.accept.label}
          </Button>
        </li>
        <li>
          <Button
            data-testid="button-refuse"
            onClick={refuseBannerButton}
            title={bannerButtons.refuse.label}
          >
            {bannerButtons.refuse.label}
          </Button>
        </li>
        <li>
          <Button
            data-testid="button-consent"
            secondary
            onClick={() => openConsentModal(true)}
            title={bannerButtons.customize.label}
            aria-controls="fr-consent-modal"
          >
            {bannerButtons.customize.label}
          </Button>
        </li>
      </ul>
    </div>
  );
};

ConsentBanner.defaultProps = { className: '', title: '' };

ConsentBanner.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  openConsentModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  refuseBannerButton: PropTypes.func.isRequired,
  acceptBannerButton: PropTypes.func.isRequired,
  bannerButtons: PropTypes.shape({
    refuse: PropTypes.shape({ label: PropTypes.string.isRequired }),
    accept: PropTypes.shape({ label: PropTypes.string.isRequired }),
    customize: PropTypes.shape({ label: PropTypes.string.isRequired }),
  }).isRequired,
};

export default ConsentBanner;
