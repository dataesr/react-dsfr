import classnames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

const HeaderBody = (props) => {
  const {
    children, className,
  } = props;
  return (
    <div className="rf-container">
      <div className={classnames(className, 'rf-header__body')} role="banner">
        {children}
      </div>
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
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
