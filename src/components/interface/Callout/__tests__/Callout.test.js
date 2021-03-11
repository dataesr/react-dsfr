import { render, screen } from '@testing-library/react';
import { Callout, CalloutText, CalloutTitle } from '..';
import Button from '../../Button';

describe('<Callout />', () => {
  it('renders Callout properly', () => {
    render(
      <Callout scheme="soft-green-warm">
        <CalloutTitle as="h3">Callout title</CalloutTitle>
        <CalloutText>Callout text that might be short and concise.</CalloutText>
        <Button title="acceder...">
          Accéder au service
        </Button>
      </Callout>,
    );
    const calloutTitle = screen.getByText('Callout title');
    expect(calloutTitle.className).toBe('rf-callout__title');
    const calloutText = screen.getByText('Callout text that might be short and concise.');
    expect(calloutText.className).toBe('rf-callout__text');
    const callout = screen.getByTestId('callout');
    expect(callout.className).toBe('rf-callout rf-fi-information-line rf-callout--scheme-soft-green-warm');
    expect(callout).toBeInTheDocument();
    expect(callout).toMatchSnapshot();
  });
});
