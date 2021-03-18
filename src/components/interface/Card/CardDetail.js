import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE } from '../../../utils/types';

const CardDetail = ({ children, className }) => (
  <p className={classNames('rf-card__detail', className)}>{children}</p>
);
CardDetail.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDetail.defaultProps = {
  className: '',
};

export default CardDetail;
