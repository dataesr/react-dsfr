import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Mise en avant.
 *
 * @visibleName Callout
 */
const Callout = ({
  scheme, hasInfoIcon, title, titleAs, text, children, className,
}) => {
  const classes = classNames(
    'rf-callout',
    {
      'rf-fi-information-line': hasInfoIcon,
      [`rf-callout--scheme-${scheme}`]: scheme,
    },
    className,
  );
  const HtmlTitleTag = `${titleAs}`;
  return (
    <div className={classes} data-testid="callout">
      {title && <HtmlTitleTag className="rf-callout__title">{title}</HtmlTitleTag>}
      {text && <p className="rf-callout__text">{text}</p>}
      {children}
    </div>
  );
};
Callout.propTypes = {
  scheme: PropTypes.string,
  hasInfoIcon: PropTypes.bool,
  title: PropTypes.string,
  titleAs: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  titleAs: 'p',
  text: null,
  title: null,
  children: null,
  className: '',
};

export default Callout;
