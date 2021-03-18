import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE, CHILDREN_TYPE, SCHEME_TYPE } from '../../../utils/types';
import { getScheme } from '../../../utils/getters';

/**
 * La tuile est un point d’entrée qui redirige les utilisateurs vers des pages de contenu.
 * Elle fait partie d'une collection et n’est jamais présentée de manière isolée.
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
  const _scheme = getScheme(scheme);
  const _className = classNames('rf-tile', {
    'rf-tile--horizontal': horizontal,
    'rf-tile--horizontal-md': !horizontal && horizontalMedium,
    'rf-tile--vertical-md': verticalMedium && horizontal,
  }, _scheme, className);
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
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  /**
   * Source of the image — size is fixed 80x80
   */
  horizontal: PropTypes.bool,
  verticalMedium: PropTypes.bool,
  horizontalMedium: PropTypes.bool,
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE.isRequired,
  scheme: SCHEME_TYPE,
};

export default Tile;
