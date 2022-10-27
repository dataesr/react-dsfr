import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/notice/notice.css';

const Notice = ({
  title, className, visible, onClose, asLink, ...remainingProps
}) => {
  const _className = classNames('fr-notice fr-notice--info', className, {});

  if (!visible) {
    return null;
  }

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      <div className="fr-container">
        <div className="fr-notice__body">
          <p className="fr-notice__title">
            {title}
            {'. '}
            {asLink}
          </p>
          <button
            type="button"
            className="fr-btn--close fr-btn"
            title="Masquer le message"
            onClick={onClose}
          >
            Masquer le message
          </button>
        </div>
      </div>
    </div>
  );
};

Notice.defaultProps = {
  className: '',
  asLink: null,
  visible: true,
  onClose: null,
};

Notice.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  asLink: PropTypes.element,
};

export default Notice;
