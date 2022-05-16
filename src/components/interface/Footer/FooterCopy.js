import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterCopy = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-footer__bottom-copy', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    <p>
      Sauf mention contraire, tous les contenus de ce site sont sous
      {' '}
      <a
        href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </p>
  </div>
);
FooterCopy.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterCopy'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterCopy.defaultProps = {
  __TYPE: 'FooterCopy',
  className: '',
};

export default FooterCopy;
