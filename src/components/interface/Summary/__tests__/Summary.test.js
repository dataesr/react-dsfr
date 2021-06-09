import { render, screen } from '@testing-library/react';

import { SummaryItem, Summary } from '..';

describe('<Summary />', () => {
  it('should renders Summary properly', () => {
    render(
      <Summary title="Sommaire" data-testid="summary">
        <SummaryItem href="#" data-testid="item1">Item 1</SummaryItem>
        <SummaryItem href="#" data-test-id="item2">Item 2</SummaryItem>
        <SummaryItem href="#" data-id="item3">Item 3</SummaryItem>
        <SummaryItem href="#" data-test--id="item4">Item 4</SummaryItem>
      </Summary>,
    );
    const summary = screen.getByTestId('summary');
    expect(summary).toBeInTheDocument();
    expect(summary).toMatchSnapshot();
  });
});
