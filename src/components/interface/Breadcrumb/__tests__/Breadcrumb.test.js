import { render, screen } from '@testing-library/react';
import { Breadcrumb, BreadcrumbButton, BreadcrumbItem } from '..';

describe('<Breadcrumb />', () => {
  it('should render breadcrumb properly', () => {
    render(
      <Breadcrumb label="fil d'ariane">
        <BreadcrumbButton>
          Voir le fil d&paos;ariane
        </BreadcrumbButton>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Productions</BreadcrumbItem>
        <BreadcrumbItem current>Production 1234567899</BreadcrumbItem>
      </Breadcrumb>,
    );
    const nav = screen.getByTestId('bc-nav');
    expect(nav.className).toBe('rf-breadcrumb');
    const bcList = screen.getByTestId('bc-list');
    expect(bcList.className).toBe('rf-breadcrumb__list');
    const button = screen.getByTestId('bc-button');
    expect(button.className).toBe('rf-breadcrumb__button');
    const items = screen.getAllByTestId('bc-item');
    expect(items).toHaveLength(3);
    expect(items[0].className).toBe('rf-breadcrumb__item');
    expect(items[2].className).toMatch(/rf-breadcrumb__item--current/);
    expect(nav).toMatchSnapshot();
  });
});
