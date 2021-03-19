import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  scheme: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node,
  className: PropTypes.string,
};
Highlight.defaultProps = {
  scheme: null,
  size: 'md',
  children: null,
  className: '',
};

export default Highlight;
