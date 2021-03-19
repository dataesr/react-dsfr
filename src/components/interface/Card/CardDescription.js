import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/types';

const CardDescription = ({ children, className }) => (
  <p className={classNames('rf-card__desc', className)}>{children}</p>
);
CardDescription.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};
CardDescription.defaultProps = {
  className: '',
};

export default CardDescription;
