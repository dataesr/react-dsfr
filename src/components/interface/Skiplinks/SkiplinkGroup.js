import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/types';

const SkiplinkGroup = ({ children, className }) => (
  <div data-testid="skiplinks" className={classNames('rf-skiplinks', className)}>
    <div className="rf-container">
      <ul className="rf-skiplinks__list">
        {children}
      </ul>
    </div>
  </div>
);

SkiplinkGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: CLASS_NAME_TYPE,
};
SkiplinkGroup.defaultProps = {
  className: '',
};
export default SkiplinkGroup;
