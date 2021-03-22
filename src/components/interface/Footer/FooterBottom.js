import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const FooterBottom = ({ children }) => {
  const links = Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'bottom' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <div className="rf-footer__bottom">
      <ul className="rf-footer__bottom-list">
        {links}
      </ul>
      {childs}
    </div>
  );
};
FooterBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterBottom;
