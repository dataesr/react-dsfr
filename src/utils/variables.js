import PropTypes from 'prop-types';

// TODO manage schemes
const schemes = ['soft-orange-soft', 'soft-purple', 'scheme-soft-purple', 'soft-yellow-medium', 'soft-blue-soft'];

export const CHILDREN_TYPE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.string,
]);
export const CLASS_NAME_TYPE = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object,
]);

export const SCHEME_TYPE = PropTypes.oneOf(schemes);
