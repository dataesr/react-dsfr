import { useEffect } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { v4 as uuidV4 } from 'uuid';
import { CHILDREN_TYPE } from '../../utils/variables';
import AccordionLine from './AccordionLine';

/**
 * Condenser l'espace
 *
 * @visibleName Accordéon
 */

const Accordion = (props) => {
  const { group, children } = props;

  const expandLine = (e) => {
    const id = e.target.getAttribute('data-button');
    const currentLine = document.querySelector(`[data-line="${id}"]`);
    const isExpanded = currentLine.className.match(/rf-collapse--expanded/gm);
    currentLine.className = isExpanded ? 'rf-collapse' : 'rf-collapse rf-collapse--expanded';
    currentLine.style.maxHeight = isExpanded ? null : 'none';
    e.target.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    currentLine.style.setProperty('--collapse', isExpanded ? `-${currentLine.getBoundingClientRect().height}px` : 0);
  };

  // TODO manage expanded by default
  // TODO Group title style
  // TODO Manage automatic close
  const groupBody = group.map((line) => {
    const id = uuidV4();
    let lineChildren = line.children || null;
    if (lineChildren && typeof line.children === 'string') {
      lineChildren = parse(line.children);
    }
    return (
      <AccordionLine
        key={id}
        id={id}
        title={line.title}
        onClick={expandLine}
      >
        {lineChildren}
      </AccordionLine>
    );
  });

  useEffect(() => {
    const lines = document.querySelectorAll('.rf-collapse');
    lines.forEach((line) => {
      line.style.setProperty('--collapse', '0px');
    });
  }, []);

  return (
    <>
      {children}
      <ul className="rf-accordions-group">
        {groupBody}
      </ul>
    </>
  );
};

Accordion.defaultProps = {
  children: '',
};

Accordion.propTypes = {
  group: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: CHILDREN_TYPE,
  })).isRequired,
  children: CHILDREN_TYPE,
};

export default Accordion;
