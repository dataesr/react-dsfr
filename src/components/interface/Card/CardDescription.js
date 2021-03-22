import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardDescription = ({ children, className }) => (
  <p className={classNames('rf-card__desc', className)}>{children}</p>
);
CardDescription.propTypes = {
  children: PropTypes.string.isRequired,
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
