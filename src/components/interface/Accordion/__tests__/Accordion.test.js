import { render, screen } from '@testing-library/react';
import { Accordion, AccordionItem } from '..';

// TODO add tests

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
});
