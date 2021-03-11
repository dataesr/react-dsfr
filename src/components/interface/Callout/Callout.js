import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * La mise en avant est une proposition de mise en page du contenu éditorial pour
 * mettre en évidence une information complémentaire.
 *
 * @visibleName Callout
 */

const Callout = ({
  scheme, hasInfoIcon, children, className,
}) => {
  const classes = classNames(
    'rf-callout',
    {
      'rf-fi-information-line': hasInfoIcon,
      [`rf-callout--scheme-${scheme}`]: scheme,
    },
    className,
  );
  return (
    <div className={classes} data-testid="callout">
      {children}
    </div>
  );
};
Callout.propTypes = {
  scheme: PropTypes.string,
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  children: null,
  className: '',
};

export default Callout;
