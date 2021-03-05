import { render, screen } from '@testing-library/react';
import Callout from '..';
import Button from '../../Button';

describe('<Callout />', () => {
  it('renders Callout properly', () => {
    render(
      <Callout
        scheme="soft-green-warm"
        title="Callout title"
        text="Callout text that might be short and concise."
        titleAs="h3"
      >
        <Button title="acceder">
          Accéder au service
        </Button>
      </Callout>,
    );
    const calloutTitle = screen.getByText('Callout title');
    expect(calloutTitle.className).toBe('rf-callout__title');
    const calloutText = screen.getByText('Callout text that might be short and concise.');
    expect(calloutText.className).toBe('rf-callout__text');
    const callout = screen.getByTestId('callout');
    expect(callout).toBeInTheDocument();
    expect(callout).toMatchSnapshot();
  });
});
