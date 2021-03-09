import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionGroup } from '..';

describe('<Accordion />', () => {
  it('should render accordion properly', () => {
    render(
      <AccordionGroup className="custom-class">
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
      </AccordionGroup>,
    );
    const group = screen.getByTestId('accordion-group');
    const items = screen.getAllByTestId('accordion');
    expect(items).toHaveLength(2);
    expect(group).toMatchSnapshot();
  });

  it('should toggle on click', () => {
    render(
      <AccordionGroup className="custom-class">
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
      </AccordionGroup>,
    );
    const item = screen.getAllByTestId('accordion')[0];
    expect(item.isExpanded).toBeFalsy();
    const button = screen.getAllByTestId('accordion-button')[0];
    const itemDiv = screen.getAllByTestId('accordion-div')[0];
    expect(itemDiv.className).toBe('rf-collapse');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('rf-collapse rf-collapse--expanded');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('rf-collapse');
  });
  it('should toggle on click another accordion', () => {
    render(
      <AccordionGroup className="custom-class">
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
        <Accordion title="first line accordion">
          Anything I want
        </Accordion>
      </AccordionGroup>,
    );
    const buttons = screen.getAllByTestId('accordion-button');
    const itemDivs = screen.getAllByTestId('accordion-div');
    fireEvent.click(buttons[0]);
    expect(itemDivs[0].className).toBe('rf-collapse rf-collapse--expanded');
    fireEvent.click(buttons[1]);
    expect(itemDivs[0].className).toBe('rf-collapse');
    expect(itemDivs[1].className).toBe('rf-collapse rf-collapse--expanded');
  });
});
