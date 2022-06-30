import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/stepper/stepper.css';

const Stepper = ({
  titleAs, currentStep, steps, currentTitle, nextStepTitle, className, ...remainingProps
}) => {
  const _className = classNames('fr-stepper', className, {});
  const HtmlTag = `${titleAs}`;

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      <HtmlTag className="fr-stepper__title">
        <span className="fr-stepper__state">{`Étape ${currentStep} sur ${steps}`}</span>
        {currentTitle}
      </HtmlTag>
      <div className="fr-stepper__steps" data-fr-current-step={currentStep} data-fr-steps={steps} />
      <p className="fr-stepper__details">
        <span className="fr-text--bold">Étape suivante : </span>
        {nextStepTitle}
      </p>
    </div>
  );
};

Stepper.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  currentTitle: PropTypes.string.isRequired,
  nextStepTitle: PropTypes.string.isRequired,
  titleAs: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
};

Stepper.defaultProps = {
  className: '',
  titleAs: 'h4',
};

export default Stepper;
