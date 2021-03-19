import PropTypes from 'prop-types';
import './style.css';

/**
 * @visibleName ToggleThemeTheme
 */
const ToggleTheme = ({ label, active, onChange }) => (
  <div className="toggle">
    <label id="switch" className="switch" htmlFor="slider">
      <span>{label && active}</span>
      <input type="checkbox" checked onChange={() => onChange()} id="slider" />
      <span className="slider round" />
    </label>
  </div>
);

ToggleTheme.defaultProps = {
  label: 'ToggleTheme',
  active: false,
};

ToggleTheme.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ToggleTheme;
