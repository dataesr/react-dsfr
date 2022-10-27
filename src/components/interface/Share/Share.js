import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/share/share.css';

const Share = ({
  children, className, title, ...remainingProps
}) => {
  const _className = classNames('fr-share', className);

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <p className="fr-share__title">{title}</p>
      <ul className="fr-btns-group">
        {children}
      </ul>
    </div>
  );
};

Share.defaultProps = {
  className: '',
  title: '',
};

Share.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Share;
