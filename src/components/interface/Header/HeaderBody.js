import PropTypes from 'prop-types';
import { deepFilter } from 'react-children-utilities';
import classNames from 'classnames';

const HeaderBody = ({ children, className }) => {
  const elements = deepFilter(children, (child) => child.type.name !== 'BrandLogo');
  const logo = deepFilter(children, (child) => child.type.name === 'BrandLogo');
  return (
    <div className="rf-container">
      <div className={classNames(className, 'rf-header__body')} role="banner">
        <div className="rf-header__brand">
          {logo}
        </div>
        {elements}
      </div>
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default HeaderBody;
