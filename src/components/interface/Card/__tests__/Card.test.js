import { render, screen } from '@testing-library/react';
import {
  Card, CardTitle, CardDescription, CardDetail, CardImage,
} from '..';

describe('<Card />', () => {
  it('renders Card properly', () => {
    render(
      <Card href="/" data-testid="card">
        <CardImage alt="alternative" src="http://fakeimg.pl/300/" data-testid="cardimage" />
        <CardDetail data-testid="carddetail">Détail</CardDetail>
        <CardTitle data-testid="cardtitle">
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </CardTitle>
        <CardDescription data-testid="carddescription">
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
      <Card href="/" isHorizontal data-testid="card">
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
    expect(card.className).toEqual('fr-card fr-card--neutral fr-card--horizontal fr-enlarge-link');
  });
  it('renders Card without enlarge link properly', () => {
    render(
      <Card data-testid="card">
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
    expect(card.className).toEqual('fr-card fr-card--neutral');
  });
});
