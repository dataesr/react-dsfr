import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

/**
 * La liste déroulante permet à un utilisateur de choisir un élément dans une liste donnée. 
 *
 * @visibleName Liste déroulante - Select
 */
const Select = forwardRef((props, ref) => {
  const {
    className,
    id,
    name,
    children,
  } = props;

  return (
    <select className={`rf-select ${className || ''}`} id={id || null} name={name || null}>
      {children}
    </select>
  );

});

// Select.defaultProps = {
//   textarea: false,
//   inactive: false,
// }
Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.array,
};

export default Select;
