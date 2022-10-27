import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/share/share.css';

const ShareButton = ({
  label, href, className, type, onClick, ...remainingProps
}) => {
  const _className = classNames('fr-share', className);

  const _onClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  const renderLink = () => {
    let link = (
      <a
        className={`fr-btn fr-btn--${type}`}
        onClick={_onClick}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );

    if (type === 'mail') {
      link = (
        <a
          className={`fr-btn fr-btn--${type}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    return link;
  };

  return (
    <li className={_className} {...dataAttributes.getAll(remainingProps)} id={`ds-fr--share-${type}`}>
      {type === 'copy' ? (
        <button
          type="button"
          className="fr-btn--copy fr-btn"
          onClick={_onClick}
        >
          {label}
        </button>
      ) : (
        renderLink()
      )}
    </li>
  );
};

ShareButton.defaultProps = {
  className: '',
  href: '',
  onClick: undefined,
};

ShareButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['facebook', 'twitter', 'linkedin', 'copy', 'mail']).isRequired,
  className: PropTypes.string,
};

export default ShareButton;
