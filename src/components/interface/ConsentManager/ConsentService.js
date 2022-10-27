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
    acceptLabel,
    refuseLabel,
    defaultConsent,
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
            label={acceptLabel}
            value={`${acceptLabel.toLowerCase().replace(/\s+/g, '')}`}
            defaultChecked={defaultConsent === 'accept'}
          />
          <Radio
            label={refuseLabel}
            value={`${refuseLabel.toLowerCase().replace(/\s+/g, '')}`}
            defaultChecked={defaultConsent === 'refuse'}
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
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  defaultConsent: PropTypes.oneOf(['accept', 'refuse']).isRequired,
  description: PropTypes.string,
  acceptLabel: PropTypes.string.isRequired,
  refuseLabel: PropTypes.string.isRequired,
};
export default ConsentService;
