import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';

const CardDetail = ({ children, className }) => (
  <p className={classNames('rf-card__detail', className)}>{children}</p>
);
CardDetail.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};
CardDetail.defaultProps = {
  className: '',
};

export default CardDetail;
