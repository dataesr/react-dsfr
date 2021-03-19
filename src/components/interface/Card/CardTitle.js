import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';

const CardTitle = ({
  href, children, as, anchorAs, className,
}) => {
  const Tag = `${as}`;
  const AnchorTag = `${anchorAs}`;
  return (
    <Tag className={classNames('rf-card__title', className)}>
      <AnchorTag href={href} className="rf-card__link">{children}</AnchorTag>
    </Tag>
  );
};

CardTitle.defaultProps = {
  anchorAs: 'a',
  as: 'p',
  className: '',
  href: '',
};
CardTitle.propTypes = {
  /**
   * @ignore
   */
  href: PropTypes.string,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
  /**
   * @ignore
   */
  anchorAs: PropTypes.string,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export default CardTitle;
