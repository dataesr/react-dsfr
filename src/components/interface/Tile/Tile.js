import React, { useEffect, useRef } from 'react';
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
  color,
  ...remainingProps
}) => {
  const tileRef = useRef();
  const _className = classNames('fr-tile fr-enlarge-link', {
    'fr-tile--horizontal': horizontal,
    'fr-tile--horizontal-md': !horizontal && horizontalMedium,
    'fr-tile--vertical-md': verticalMedium && horizontal,
  }, className);

  const onTileClick = (e) => {
    onClick(e);
  };

  const HTMLTag = onClick ? 'button' : 'div';

  useEffect(() => {
    if (color && tileRef.current) {
      tileRef.current.style.boxShadow = `inset 0 -0.25rem 0 0 ${color}`;
    }
  }, [color]);

  return (
    <HTMLTag
      ref={tileRef}
      type={onClick ? 'button' : undefined}
      aria-label={ariaLabel || undefined}
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
  color: '',
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
  color: PropTypes.string,
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
