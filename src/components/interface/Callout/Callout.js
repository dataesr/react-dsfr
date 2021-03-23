import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

/**
 * La mise en avant est une proposition de mise en page du contenu éditorial pour
 * mettre en évidence une information complémentaire.
 *
 * @visibleName Callout
 */
const Callout = ({
  scheme, hasInfoIcon, children, className,
}) => {
  const _className = classNames('rf-callout', className, {
    'rf-fi-information-line': hasInfoIcon,
    [`rf-callout--scheme-${scheme}`]: scheme,
  });
  return (
    <div className={_className} data-testid="callout">
      {children}
    </div>
  );
};
Callout.propTypes = {
  scheme: PropTypes.oneOf(SCHEMES),
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  className: '',
};

export default Callout;
