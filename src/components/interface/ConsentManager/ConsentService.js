import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import { RadioGroup, Radio } from '../Radio';

const ConsentService = ({
  className, description, title, acceptButtonLabel, refuseButtonLabel, ...remainingProps
}) => {
  const _className = classNames('fr-consent-service', className);
  return (
    <>
      <div className={_className} {...dataAttributes.getAll(remainingProps)}>
        <div className="fr-consent-service__radios">
          <RadioGroup
            legend={title}
            isInline
          >
            <Radio
              label={acceptButtonLabel}
              value={acceptButtonLabel}
            />
            <Radio
              label={refuseButtonLabel}
              value={refuseButtonLabel}
            />
          </RadioGroup>
        </div>
        <p className="fr-consent-service__desc">
          {description}
        </p>
      </div>
    </>
  );
};

ConsentService.defaultProps = { description: '', className: '' };

ConsentService.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  acceptButtonLabel: PropTypes.string.isRequired,
  refuseButtonLabel: PropTypes.string.isRequired,
};
export default ConsentService;
