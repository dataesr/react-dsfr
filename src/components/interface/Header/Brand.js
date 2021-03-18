import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CLASS_NAME_TYPE } from '../../../utils/types';

const Brand = (props) => {
  const {
    title, className, linkTitle, link,
  } = props;
  return (
    <div className={classNames('rf-header__brand', className)}>
      <a className="rf-logo" href={link} title={linkTitle}>
        <span className="rf-logo__title" dangerouslySetInnerHTML={{ __html: title }} />
      </a>
    </div>
  );
};

Brand.defaultProps = {
  className: '',
  link: '/',
};

Brand.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkTitle: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
};

export default Brand;
