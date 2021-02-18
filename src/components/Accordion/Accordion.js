import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import classnames from 'classnames';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../utils/variables';
import AccordionLine from './AccordionLine';

/**
 * Condenser l'espace
 *
 * @visibleName Accordion
 */

const Accordion = (props) => {
  const { group, className, children } = props;

  // TODO manage expanded by default
  // TODO Group title style
  // TODO Manage automatic close
  const groupBody = group.map((line) => {
    const id = uuidv4();
    let lineChildren = line.children || null;
    if (lineChildren && typeof line.children === 'string') {
      lineChildren = parse(line.children);
    }
    return (
      <AccordionLine
        className={line.className}
        key={id}
        id={id}
        title={line.title}
      >
        {lineChildren}
      </AccordionLine>
    );
  });

  return (
    <section className={classnames(className)}>
      {children}
      <ul className="rf-accordions-group">
        {groupBody}
      </ul>
    </section>
  );
};

Accordion.defaultProps = {
  children: '',
  className: '',
};

Accordion.propTypes = {
  group: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: CHILDREN_TYPE,
  })).isRequired,
  children: CHILDREN_TYPE,
  className: CLASS_NAME_TYPE,
};

export default Accordion;
