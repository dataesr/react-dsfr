import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

const Brand = (props) => {
  const {
    title, className, linkTitle,
  } = props;
  return (
    <div className={classnames('rf-header__brand', className)}>
      <a className="rf-logo" href="/" title={linkTitle}>
        <span className="rf-logo__title" dangerouslySetInnerHTML={{ __html: title }} />
      </a>
    </div>
  );
};

Brand.defaultProps = {
  className: '',
};

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
};

export default Brand;
