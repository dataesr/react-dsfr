import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName File
 */
const DownloadGroup = ({
  className,
  children,
  title,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-downloads-group fr-downloads-group--bordered',
    className,
  );

  return (
    <div {...dataAttributes.getAll(remainingProps)} className={_className}>
      <h4 className="fr-downloads-group__title">{title}</h4>
      <ul>
        {Children.toArray(children).map((child) => <li key={child.props.name}>{child}</li>)}
      </ul>
    </div>
  );
};

DownloadGroup.defaultProps = {
  className: '',
  title: '',
};

DownloadGroup.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

export default DownloadGroup;
