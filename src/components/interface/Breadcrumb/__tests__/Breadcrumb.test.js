import { render, screen } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem } from '..';

describe('<Breadcrumb />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it('should render breadcrumb properly', () => {
    render(
      <Breadcrumb data-testid="breadcrumb">
        <BreadcrumbItem href="#" data-testid="bcitem">Home</BreadcrumbItem>
        <BreadcrumbItem href="#" data-testid="bcitem">Productions</BreadcrumbItem>
        <BreadcrumbItem data-testid="bcitem">
          Production 1234567899 avec un nom de page hyper long qui devrait etre tronqué
        </BreadcrumbItem>
      </Breadcrumb>,
    );
    const nav = screen.getByTestId('breadcrumb');
    expect(nav.className).toBe('fr-breadcrumb');
    const bcList = screen.getByTestId('bc-list');
    expect(bcList.className).toBe('fr-breadcrumb__list');
    const button = screen.getByTestId('bc-button');
    expect(button.className).toBe('fr-breadcrumb__button');
    const items = screen.getAllByTestId('bcitem');
    expect(items).toHaveLength(3);
    expect(items[0].className).toBe('fr-breadcrumb__item');
    expect(items[2].className).toMatch(/fr-breadcrumb__item--current/);
    expect(nav).toMatchSnapshot();
  });
});
