import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

/**
 * La mise en exergue met en évidence une information déjà présente dans le reste du contenu.
 *
 * @visibleName Highlight
 */
const Highlight = ({
  scheme, size, children, className,
}) => {
  const _className = classNames('rf-highlight', {
    [`rf-highlight--scheme-${scheme}`]: scheme,
    [`rf-highlight--${size}`]: (['sm', 'lg'].includes(size)),
  }, className);
  return (
    <div className={_className} data-testid="highlight">
      {children}
    </div>
  );
};
Highlight.propTypes = {
  scheme: PropTypes.oneOf(SCHEMES),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Highlight.defaultProps = {
  scheme: null,
  size: 'md',
  className: '',
};

export default Highlight;
