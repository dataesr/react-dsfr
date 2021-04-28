import { render, screen } from '@testing-library/react';
import Highlight from '..';

describe('<Highlight />', () => {
  it('renders Highlight properly', () => {
    render(
      <Highlight scheme="soft-green-warm">
        Highlight text that might be short and concise.
      </Highlight>,
    );
    const highlight = screen.getByTestId('highlight');
    expect(highlight.className).toBe('fr-highlight fr-highlight--scheme-soft-green-warm');
    expect(highlight).toHaveTextContent('Highlight text that might be short and concise.');
    expect(highlight).toBeInTheDocument();
    expect(highlight).toMatchSnapshot();
  });
  it('renders Highlight size properly', () => {
    render(
      <Highlight size="lg">
        Highlight text that might be short and concise.
      </Highlight>,
    );
    const highlight = screen.getByTestId('highlight');
    expect(highlight.className).toBe('fr-highlight fr-highlight--lg');
  });
});
