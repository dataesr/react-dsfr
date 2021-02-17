import PropTypes from 'prop-types';

export const CHILDREN_TYPE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.string,
]);
export const test = 0;
