import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '..';

describe('<Card />', () => {
  it('renders Card properly', () => {
    render(
      <Card href="/">
        <Card.Image alt="alternative" src="http://fakeimg.pl/300/" />
        <Card.Detail>Détail</Card.Detail>
        <Card.Title>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </Card.Title>
        <Card.Description>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </Card.Description>
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toMatchSnapshot();
  });
  it('renders horizontal Card properly', () => {
    render(
      <Card href="/" isHorizontal>
        <Card.Image alt="alternative" src="http://fakeimg.pl/300/" />
        <Card.Detail>Détail</Card.Detail>
        <Card.Title>
          Qu’est-ce que le Pass Culture et comment l’obtenir ?
        </Card.Title>
        <Card.Description>
          Description texte body small regular consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore…
        </Card.Description>
      </Card>,
    );
    const card = screen.getByTestId('card');
    expect(card.className).toBe('rf-card rf-card--horizontal');
  });
});
