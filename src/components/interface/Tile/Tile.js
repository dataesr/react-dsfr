import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

import '@gouvfr/dsfr/dist/css/tiles.min.css';

/**
 *
 * @visibleName Tile
 */
const Tile = ({
  horizontal,
  className,
  horizontalMedium,
  verticalMedium,
  children,
  scheme,
}) => {
  const _className = classNames('rf-tile rf-enlarge-link', {
    'rf-tile--horizontal': horizontal,
    'rf-tile--horizontal-md': !horizontal && horizontalMedium,
    'rf-tile--vertical-md': verticalMedium && horizontal,
    [`rf-scheme-${scheme}`]: scheme,
  }, className);
  return <div className={_className}>{children}</div>;
};

Tile.defaultProps = {
  className: '',
  scheme: '',
  horizontal: false,
  verticalMedium: false,
  horizontalMedium: false,
};

Tile.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
   * Source of the image — size is fixed 80x80
   */
  horizontal: PropTypes.bool,
  verticalMedium: PropTypes.bool,
  horizontalMedium: PropTypes.bool,
  /**
   * One of: node, arrayOf(node), string
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  scheme: PropTypes.oneOf(SCHEMES),
};

export default Tile;
