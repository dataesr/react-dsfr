import React, {
  useState, useEffect, useRef, Children,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.0.0
*/
import '@gouvfr/dsfr/dist/css/core.min.css';
import '@gouvfr/dsfr/dist/css/content.min.css';
import '@gouvfr/dsfr/dist/css/forms.min.css';
import '@gouvfr/dsfr/dist/css/inputs.min.css';

/*
* react-ds-fr
*/
import '../../../style/colors.css';
import '../../../style/custom.css';

import '@gouvfr/dsfr/dist/css/breadcrumb.min.css';

/**
 * @visibleName Breadcrumb
 */
const Breadcrumb = ({
  label,
  buttonLabel,
  className,
  children,
  ...remainingProps
}) => {
  const breadRef = useRef();
  const buttonRef = useRef();
  const listRef = useRef();
  const [open, setOpen] = useState(true);
  const [clicked, setClicked] = useState(false);
  const content = Children.toArray(children).filter(
    (child) => child.props.__TYPE === 'BreadcrumbItem',
  );
  const _className = classNames('fr-breadcrumb', className);
  const handleOpenBreadcrumb = () => {
    const height = buttonRef.current.offsetHeight;
    breadRef.current.style.maxHeight = `calc(${height}px + 1rem)`;
    breadRef.current.style.transition = 'max-height 250ms ease-out';
    setClicked(true);
    setOpen(true);
  };
  useEffect(() => {
    const handleScreenSize = () => (!clicked) && setOpen(window.matchMedia('(min-width: 48em)').matches);
    handleScreenSize();
    const height = (open) ? listRef.current.offsetHeight : buttonRef.current.offsetHeight;
    breadRef.current.style.maxHeight = `calc(${height}px + 1rem)`;
    window.addEventListener('resize', handleScreenSize);
    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, [open, clicked]);

  return (
    <nav
      ref={breadRef}
      className={_className}
      aria-label={label}
      {...dataAttributes(remainingProps)}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={handleOpenBreadcrumb}
        className="fr-breadcrumb__button"
        hidden={open}
        data-testid="bc-button"
      >
        {buttonLabel}
      </button>
      <div
        className="fr-collapse"
      >
        <ol
          ref={listRef}
          className="fr-breadcrumb__list"
          hidden={!open}
          data-testid="bc-list"
        >
          {content}
        </ol>
      </div>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  className: '',
  buttonLabel: "Voir le fil d'ariane",
  label: "Fil d'ariane",
};

Breadcrumb.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Breadcrumb;
