import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const HeaderBody = (props) => {
  const {
    children, className, brandLinkTitle, brand,
  } = props;
  return (
    <div className={classnames(className, 'rf-header__body')} role="banner">
      <div className="rf-header__brand">
        <a className="rf-logo" href="/" title={brandLinkTitle}>
          <span className="rf-logo__title" dangerouslySetInnerHTML={{ __html: brand }} />
        </a>
      </div>
      {children}
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  brand: PropTypes.string.isRequired,
  brandLinkTitle: PropTypes.string.isRequired,
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default HeaderBody;
