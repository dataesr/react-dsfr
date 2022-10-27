import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const ModalClose = ({
  hide, title, children, className, ...remainingProps
}) => (
  <button
    className={classNames('fr-link--close fr-link', className)}
    type="button"
    onClick={hide}
    title={title}
    aria-controls="fr-modal"
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}
  </button>
);
ModalClose.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalClose'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  /**
   * @ignore
   */
  hide: PropTypes.func,
  className: PropTypes.string,
};
ModalClose.defaultProps = {
  __TYPE: 'ModalClose',
  children: 'Fermer',
  title: 'Fermer la fenêtre modale',
  className: '',
  hide: () => {},

};

export default ModalClose;
