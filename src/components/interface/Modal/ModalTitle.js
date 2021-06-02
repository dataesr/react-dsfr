import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';
import dataAttributes from '../../../utils/data-attributes';

const ModalTitle = ({
  children, className, icon, ...remainingProps
}) => {
  const _title = (
    <h1
      className={classNames('fr-modal__title', className, {
        'ds-fr--inline-block': icon,
      })}
      id="fr-modal-title-modal"
      {...dataAttributes(remainingProps)}
    >
      {children}
    </h1>
  );
  return icon ? (
    <Icon
      className="ds-fr--v-middle"
      name={icon}
      size="lg"
    >
      {_title}
    </Icon>
  ) : _title;
};

ModalTitle.defaultProps = {
  icon: '',
  className: '',
};

ModalTitle.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default ModalTitle;
