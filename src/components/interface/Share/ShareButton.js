import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/share/share.css';

const ShareButton = ({
  className, href, label, onClick, type, ...remainingProps
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
        href={href}
        onClick={_onClick}
        rel="noopener noreferrer"
        target="_blank"
      >
        {label}
      </a>
    );

    if (type === 'mail') {
      link = (
        <a
          className={`fr-btn fr-btn--${type}`}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
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
          className="fr-btn--copy fr-btn"
          onClick={_onClick}
          type="button"
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
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['facebook', 'twitter', 'linkedin', 'copy', 'mail']).isRequired,
};

export default ShareButton;
