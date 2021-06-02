import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const ModalClose = ({
  hide, title, children, className, ...remainingProps
}) => (
  <button
    className={classNames('fr-link--close fr-link', className)}
    type="button"
    onClick={hide}
    title={title}
    aria-controls="fr-modal"
    {...dataAttributes(remainingProps)}
  >
    {children}
  </button>
);
ModalClose.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  /**
   * @ignore
   */
  hide: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalClose.defaultProps = {
  children: 'Fermer',
  title: 'Fermer la fenêtre modale',
  className: '',
  hide: () => {},

};

export default ModalClose;
