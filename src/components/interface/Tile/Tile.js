import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE, CHILDREN_TYPE } from '../../../utils/variables';

/**
 * La tuile est un point d’entrée qui redirige les utilisateurs vers des pages de contenu.
 * Elle fait partie d'une collection et n’est jamais présentée de manière isolée.
 *
 * @visibleName Tuile horizontale ou verticale
 */
const Tile = ({
  horizontal,
  className,
  horizontalMedium,
  verticalMedium,
  children,
}) => (
  <div className={classnames(className, 'rf-tile', {
    'rf-tile--horizontal': horizontal,
    'rf-tile--horizontal-md': !horizontal && horizontalMedium,
    'rf-tile--vertical-md': verticalMedium && horizontal,
  })}
  >
    {children}
  </div>
);

Tile.defaultProps = {
  className: '',
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
};

export default Tile;
