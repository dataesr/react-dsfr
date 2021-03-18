import PropTypes from 'prop-types';

export const CHILDREN_TYPE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.string,
]);
export const CLASS_NAME_TYPE = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
  PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.object,
  ),
]);

export const SCHEME_TYPE = PropTypes.oneOf([
  'light-white',
  'light-grey-100',
  'light-grey-200',
  'light-beige',
  'dark-grey-800',
  'soft-brown',
  'soft-blue-soft',
  'soft-blue-dark',
  'soft-green-light',
  'soft-green-medium',
  'soft-green-soft',
  'soft-green-warm',
  'soft-orange-dark',
  'soft-orange-medium',
  'soft-orange-soft',
  'soft-purple',
  'soft-pink-dark',
  'soft-pink-light',
  'soft-pink-soft',
  'soft-yellow-dark',
  'soft-yellow-medium',
]);
