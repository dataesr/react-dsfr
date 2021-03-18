import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE, SCHEME_TYPE } from '../../../utils/types';
import { getScheme } from '../../../utils/getters';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';
import CardDetail from './CardDetail';
import CardImage from './CardImage';
/**
 * Carte
 *
 * @visibleName Card
 */
const Card = ({
  children,
  anchorAs,
  href,
  isHorizontal,
  className,
  hasArrow,
  scheme,
}) => {
  const img = Children.toArray(children).find((child) => child.type.name === 'CardImage');
  const detail = Children.toArray(children).find((child) => child.type.name === 'CardDetail');
  const description = Children.toArray(children).find(
    (child) => child.type.name === 'CardDescription',
  );
  const title = Children.toArray(children).find((child) => child.type.name === 'CardTitle');
  const displayTitle = title && cloneElement(title, { href, anchorAs });
  const _scheme = getScheme(scheme);
  const _className = classNames('rf-card', {
    'rf-card--horizontal': isHorizontal,
    'rf-card--no-arrow': !hasArrow,
  }, className, _scheme);
  return (
    <div className={_className} data-testid="card">
      {img}
      <div className="rf-card__body">
        {detail}
        {displayTitle}
        {description}
      </div>
    </div>
  );
};

Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Detail = CardDetail;
Card.Image = CardImage;

Card.defaultProps = {
  anchorAs: 'a',
  isHorizontal: false,
  className: '',
  hasArrow: true,
  scheme: '',
};
Card.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  anchorAs: PropTypes.string,
  href: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
  className: CLASS_NAME_TYPE,
  hasArrow: PropTypes.bool,
  scheme: SCHEME_TYPE,
};

export default Card;
