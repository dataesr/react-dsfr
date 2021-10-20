import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem } from '..';

describe('<Accordion />', () => {
  it('should render accordion properly', () => {
    render(
      <Accordion
        className="custom-class"
        data-testid="accordiongroup"
        size="lg"
        color="#f88"
      >
        <AccordionItem title="first line accordion" data-testid="accordion">
          Anything I want
        </AccordionItem>
        <AccordionItem title="first line accordion" data-testid="accordion">
          Anything I want
        </AccordionItem>
      </Accordion>,
    );
    const group = screen.getByTestId('accordiongroup');
    const items = screen.getAllByTestId('accordion');
    expect(items).toHaveLength(2);
    expect(group).toMatchSnapshot();
  });

  it('should toggle on click', () => {
    render(
      <Accordion className="custom-class">
        <AccordionItem title="first line accordion" data-testid="accordion">
          Anything I want
        </AccordionItem>
        <AccordionItem title="first line accordion" data-testid="accordion">
          Anything I want
        </AccordionItem>
      </Accordion>,
    );
    const item = screen.getAllByTestId('accordion')[0];
    expect(item.isExpanded).toBeFalsy();
    const button = screen.getAllByTestId('accordion-button')[0];
    const itemDiv = screen.getAllByTestId('accordion-div')[0];
    expect(itemDiv.className).toBe('fr-collapse');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('fr-collapse fr-collapse--expanded');
    fireEvent.click(button);
    expect(itemDiv.className).toBe('fr-collapse');
  });
  it('should toggle on click another accordion', () => {
    render(
      <Accordion className="custom-class">
        <AccordionItem title="first line accordion">
          Anything I want
        </AccordionItem>
        <AccordionItem title="first line accordion">
          Anything I want
        </AccordionItem>
      </Accordion>,
    );
    const buttons = screen.getAllByTestId('accordion-button');
    const itemDivs = screen.getAllByTestId('accordion-div');
    fireEvent.click(buttons[0]);
    expect(itemDivs[0].className).toBe('fr-collapse fr-collapse--expanded');
    fireEvent.click(buttons[1]);
    expect(itemDivs[0].className).toBe('fr-collapse');
    expect(itemDivs[1].className).toBe('fr-collapse fr-collapse--expanded');
  });
});
