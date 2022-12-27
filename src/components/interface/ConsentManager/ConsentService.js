import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import { RadioGroup, Radio } from '../Radio';

const ConsentService = forwardRef((props, ref) => {
  const {
    acceptLabel,
    className,
    defaultConsent,
    description,
    disabled,
    name,
    onChange,
    refuseLabel,
    title,
    value,
    ...remainingProps
  } = props;
  const _className = classNames(
    'fr-consent-service ds-fr--border-bottom',
    className,
  );
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
      ref={ref}
    >
      <div className="fr-consent-service__radios">
        <RadioGroup
          disabled={disabled}
          isInline
          legend={title}
          name={name}
          onChange={onChange}
          value={value || defaultConsent}
        >
          <Radio
            disabled={disabled}
            label={acceptLabel}
            value="accept"
          />
          <Radio
            disabled={disabled}
            label={refuseLabel}
            value="refuse"
          />
        </RadioGroup>
      </div>
      <p className="fr-consent-service__desc">{description}</p>
    </div>
  );
});

ConsentService.defaultProps = {
  description: '',
  disabled: false,
  className: '',
  onChange: () => null,
  value: undefined,
};

ConsentService.propTypes = {
  acceptLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultConsent: PropTypes.oneOf(['accept', 'refuse']).isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  refuseLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOf(['accept', 'refuse']),
};
export default ConsentService;
