import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import { RadioGroup, Radio } from '../Radio';

const ConsentService = forwardRef((props, ref) => {
  const {
    className,
    description,
    title,
    acceptButtonLabel,
    refuseButtonLabel,
    acceptValue,
    refuseValue,
    consent,
    ...remainingProps
  } = props;
  const _className = classNames('fr-consent-service ds-fr--border-bottom', className);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
      ref={ref}
    >
      <div className="fr-consent-service__radios">
        <RadioGroup
          legend={title}
          isInline
        >
          <Radio
            label={acceptButtonLabel}
            value={acceptValue}
            defaultChecked={consent === acceptValue}
          />
          <Radio
            label={refuseButtonLabel}
            value={refuseValue}
            defaultChecked={consent === refuseValue}
          />
        </RadioGroup>
      </div>
      <p className="fr-consent-service__desc">
        {description}
      </p>
    </div>
  );
});

ConsentService.defaultProps = {
  description: '',
  className: '',
};

ConsentService.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string.isRequired,
  consent: PropTypes.string.isRequired,
  description: PropTypes.string,
  acceptButtonLabel: PropTypes.string.isRequired,
  acceptValue: PropTypes.string.isRequired,
  refuseValue: PropTypes.string.isRequired,
  refuseButtonLabel: PropTypes.string.isRequired,
};
export default ConsentService;
