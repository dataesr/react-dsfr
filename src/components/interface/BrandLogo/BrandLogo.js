import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

/**
 *
 * @visibleName Bloc-marque
 */
const BrandLogo = ({
  children, href, className, splitCharacter, hrefTitle,
}) => {
  // TODO Better system to split
  const regex = new RegExp(`.{${splitCharacter.toString()}}\\S*\\s+`, 'g');
  const arrayStr = children.replace(regex, '$&@').split(/\s+@/);
  const title = arrayStr.reduce((el, a, i) => el.concat(a, i < arrayStr.length - 1 ? (
    <br
      key={uuidv4()}
    />
  ) : ''), []);
  return (
    <a
      className={classNames('rf-logo', className)}
      href={href}
      title={hrefTitle || children}
    >
      <span className="rf-logo__title">
        {title}
      </span>
    </a>
  );
};

BrandLogo.defaultProps = {
  href: '/',
  hrefTitle: '',
  splitCharacter: 12,
  className: '',
};
BrandLogo.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.string.isRequired,
  hrefTitle: PropTypes.string,
  href: PropTypes.string,
  /**
  * Number of characters to split title
  */
  splitCharacter: PropTypes.number,
};

export default BrandLogo;
