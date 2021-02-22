import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
/**
 * Le tag catégorise/classe/organise les contenus à l'aide de mots-clés.
 * Il aide les utilisateurs à rechercher et à trouver facilement une information.
 *
 * @visibleName Tag
 */
const TagGroup = ({ className, children }) => {
  const classes = classNames('rf-tags-group', className);
  const childList = React.Children.toArray(children);
  const childs = childList.map((child) => <li key={uuidv4()}>{child}</li>);
  return <ul className={classes} data-testid="tag-group">{childs}</ul>;
};

TagGroup.defaultProps = {
  className: '',
};

TagGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TagGroup;
