import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalTitle = ({ children, icon, className }) => (
  <h1 id="fr-modal-title-modal" className="fr-modal__title">
    {icon && (
      <span className={classNames('fr-fi-arrow-right-line fr-fi--lg', className)} />
    )}
    {children}
  </h1>
);

ModalTitle.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalTitle.defaultProps = {
  icon: true,
  className: '',
};

export default ModalTitle;
