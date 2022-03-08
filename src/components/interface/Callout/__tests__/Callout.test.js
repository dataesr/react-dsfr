import { render, screen } from '@testing-library/react';
import { Callout, CalloutText, CalloutTitle } from '..';
import { Button } from '../../Button';

describe('<Callout />', () => {
  it('renders Callout properly', () => {
    render(
      <Callout data-testid="callout">
        <CalloutTitle as="h3" data-testid="title" size="sm">Callout title</CalloutTitle>
        <CalloutText data-testid="text" size="lg">Callout text that might be short and concise.</CalloutText>
        <Button title="acceder...">
          Accéder au service
        </Button>
      </Callout>,
    );
    const calloutTitle = screen.getByText('Callout title');
    expect(calloutTitle.className).toBe('fr-callout__title fr-text--sm');
    const calloutText = screen.getByText('Callout text that might be short and concise.');
    expect(calloutText.className).toBe('fr-callout__text fr-text--lg');
    const callout = screen.getByTestId('callout');
    expect(callout.className).toBe('fr-callout fr-fi-information-line');
    expect(callout).toBeInTheDocument();
    expect(callout).toMatchSnapshot();
  });
});
