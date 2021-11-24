import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/tile/tile.css';

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
  const _className = classNames('fr-tile fr-tile--neutral fr-enlarge-link', {
    'fr-tile--horizontal': horizontal,
    'fr-tile--horizontal-md': !horizontal && horizontalMedium,
    'fr-tile--vertical-md': verticalMedium && horizontal,
  }, className);

  const onTileClick = (e) => {
    e.preventDefault();
    onClick(e);
  };

  useEffect(() => {
    if (color && tileRef.current) {
      tileRef.current.style.boxShadow = `inset 0 0 0 1px var(--border-default-grey),inset 0 -.25rem 0 0 ${color}`;
    }
  }, [color]);

  const divButton = {
    true: {
      tabIndex: '0',
      role: 'button',
      click: (e) => onTileClick(e),
    },
    false: {
      tabIndex: undefined,
      role: undefined,
      click: undefined,
    },
  };
  const { role, tabIndex, click } = divButton[!!onClick];

  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={tileRef}
      role={role}
      tabIndex={tabIndex}
      aria-label={ariaLabel || undefined}
      onClick={click}
      onKeyDown={click}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </div>
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
