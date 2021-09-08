import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const ModalTitle = ({
  children, className, icon, ...remainingProps
}) => {
  const _title = (
    <h1
      className={classNames('fr-modal__title', className, {
        'ds-fr--inline-block': icon,
      })}
      id="fr-modal-title-modal"
      {...dataAttributes.getAll(remainingProps)}
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
  __TYPE: 'ModalTitle',
  icon: '',
  className: '',
};

ModalTitle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalTitle'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default ModalTitle;
