import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/types';

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
  scheme: PropTypes.string,
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: CLASS_NAME_TYPE,
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  className: '',
};

export default Callout;
