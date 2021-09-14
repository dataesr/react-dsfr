import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

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
  onClick,
  ariaLabel,
  children,
  ...remainingProps
}) => {
  const _className = classNames('fr-tile fr-enlarge-link', {
    'fr-tile--horizontal': horizontal,
    'fr-tile--horizontal-md': !horizontal && horizontalMedium,
    'fr-tile--vertical-md': verticalMedium && horizontal,
  }, className);

  const onTileClick = (e) => {
    onClick(e);
  };

  const HTMLTag = onClick ? 'button' : 'div';

  return (
    <HTMLTag
      type={onClick ? 'button' : undefined}
      ariaLabel={ariaLabel || undefined}
      onClick={onClick ? onTileClick : undefined}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HTMLTag>
  );
};

Tile.defaultProps = {
  className: '',
  ariaLabel: '',
  horizontal: false,
  verticalMedium: false,
  horizontalMedium: false,
  onClick: null,
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
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Tile;
