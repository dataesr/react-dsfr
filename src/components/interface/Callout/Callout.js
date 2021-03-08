import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * La mise en avant est une proposition de mise en page du contenu éditorial pour
 * mettre en évidence une information complémentaire.
 *
 * @visibleName Callout
 */
export const CalloutTitle = ({ as, children, className }) => {
  const HtmlTitleTag = `${as}`;
  return (
    <HtmlTitleTag className={classNames('rf-callout__title', className)}>
      {children}
    </HtmlTitleTag>
  );
};

CalloutTitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};
CalloutTitle.defaultProps = {
  as: 'p',
  className: '',
};

export const CalloutText = ({ children, className }) => (
  <p className={classNames('rf-callout__text', className)}>
    {children}
  </p>
);

CalloutText.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
CalloutText.defaultProps = {
  className: '',
};

export const Callout = ({
  scheme, hasInfoIcon, children, className,
}) => {
  const classes = classNames(
    'rf-callout',
    {
      'rf-fi-information-line': hasInfoIcon,
      [`rf-callout--scheme-${scheme}`]: scheme,
    },
    className,
  );
  return (
    <div className={classes} data-testid="callout">
      {children}
    </div>
  );
};
Callout.propTypes = {
  scheme: PropTypes.string,
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  children: null,
  className: '',
};
