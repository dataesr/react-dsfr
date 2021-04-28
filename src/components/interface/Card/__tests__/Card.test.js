import { render, screen } from '@testing-library/react';
import {
  Card, CardTitle, CardDescription, CardDetail, CardImage,
} from '..';

describe('<Card />', () => {
  it('renders Card properly', () => {
    render(
      <Card href="/">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toMatchSnapshot();
  });
  it('renders horizontal Card properly', () => {
    render(
      <Card href="/" isHorizontal>
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" />
        <CardDetail>Détail</CardDetail>
        <CardTitle>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </CardDescription>
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card.className).toBe('fr-card fr-card--horizontal');
  });
});
