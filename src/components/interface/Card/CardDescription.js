import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE } from '../../../utils/types';

const CardDescription = ({ children, className }) => (
  <p className={classNames('rf-card__desc', className)}>{children}</p>
);
CardDescription.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CardDescription.defaultProps = {
  className: '',
};

export default CardDescription;
