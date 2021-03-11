import { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 * Carte
 *
 * @visibleName Card
 */
export const CardTitle = ({
  href, children, as, anchorAs, className,
}) => {
  const Tag = `${as}`;
  const AnchorTag = `${anchorAs}`;
  return (
    <Tag className={classNames('rf-card__title', className)}>
      <AnchorTag href={href} className="rf-card__link">{children}</AnchorTag>
    </Tag>
  );
};

CardTitle.defaultProps = {
  anchorAs: 'a',
  as: 'p',
  className: '',
  href: '',
};
CardTitle.propTypes = {
  /**
   * @ignore
   */
  href: PropTypes.string,
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
  /**
   * @ignore
   */
  anchorAs: PropTypes.string,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

export const CardDetail = ({ children, className }) => (
  <p className={classNames('rf-card__detail', className)}>{children}</p>
);
CardDetail.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};
CardDetail.defaultProps = {
  className: '',
};

export const CardDescription = ({ children, className }) => (
  <p className={classNames('rf-card__desc', className)}>{children}</p>
);
CardDescription.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  className: CLASS_NAME_TYPE,
};
CardDescription.defaultProps = {
  className: '',
};

export const CardImage = ({ alt, src, className }) => (
  <div className={classNames('rf-card__img', className)}>
    <img src={src} alt={alt} />
  </div>
);

CardImage.propTypes = {
  alt: PropTypes.string.isRequired,
  className: CLASS_NAME_TYPE,
  src: PropTypes.string.isRequired,
};
CardImage.defaultProps = {
  className: '',
};

export class Card extends Component {
  render() {
    const {
      children, anchorAs, href, isHorizontal, className,
    } = this.props;
    const img = Children.toArray(children).find((child) => child.type.name === 'CardImage');
    const detail = Children.toArray(children).find((child) => child.type.name === 'CardDetail');
    const description = Children.toArray(children).find(
      (child) => child.type.name === 'CardDescription',
    );
    const title = Children.toArray(children).find((child) => child.type.name === 'CardTitle');
    const displayTitle = title && cloneElement(title, { href, anchorAs });
    const classes = classNames('rf-card', { 'rf-card--horizontal': isHorizontal }, className);
    return (
      <div className={classes} data-testid="card">
        {img}
        <div className="rf-card__body">
          {detail}
          {displayTitle}
          {description}
        </div>
      </div>
    );
  }
}
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Detail = CardDetail;
Card.Image = CardImage;

Card.defaultProps = {
  anchorAs: 'a',
  isHorizontal: false,
  className: '',
};
Card.propTypes = {
  children: CHILDREN_TYPE.isRequired,
  anchorAs: PropTypes.string,
  href: PropTypes.string.isRequired,
  isHorizontal: PropTypes.bool,
  className: CLASS_NAME_TYPE,
};

export default Card;
