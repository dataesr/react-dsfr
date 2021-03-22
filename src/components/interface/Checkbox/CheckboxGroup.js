import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @visibleName CheckboxGroup
 */
const CheckboxGroup = ({
  children,
  className,
  hint,
  isInline,
  legend,
  message,
  messageType,
}) => {
  const _className = classNames('rf-form-group', {
    'rf-fieldset--inline': isInline,
    [`rf-fieldset--${messageType}`]: messageType,
  }, className);
  return (
    <div className={_className}>
      <fieldset className="rf-fieldset">
        {legend && <legend className="rf-fieldset__legend">{legend}</legend>}
        {hint && <p className="rf-hint-text">{hint}</p>}
        <div className="rf-fieldset__content">
          {children}
        </div>
        {(message && messageType) && <p className={`rf-${messageType}-text`}>{message}</p>}
      </fieldset>
    </div>
  );
};

CheckboxGroup.defaultProps = {
  className: '',
  hint: '',
  isInline: false,
  legend: '',
  messageType: '',
  message: '',
};

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  isInline: PropTypes.bool,
  legend: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
};

export default CheckboxGroup;
