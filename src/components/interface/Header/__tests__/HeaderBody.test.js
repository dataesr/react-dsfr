import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  HeaderBody,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<HeaderBody />', () => {
  let wrapper;
  const context = {
    isMobile: true,
    isNavTool: true,
    onOpenNav: jest.fn(),
    navButton: 'navigation',
    isSearchBar: true,
    onOpenSearch: jest.fn(),
    searchButton: 'search',
  };

  beforeEach(() => {
    wrapper = (ui, { providerProps, ...renderOptions }) => render(
      <HeaderContext.Provider value={context}>
        {ui}
      </HeaderContext.Provider>,
      renderOptions,
    );
  });
  it('should have button with navigation as text', () => {
    const { getByText } = wrapper(<HeaderBody />, { context });
    expect(getByText(/navigation/i).textContent).toBe('navigation');
  });

  it('should call onOpenNav', async () => {
    const user = userEvent.setup();

    wrapper(<HeaderBody />, { context });

    await user.click(screen.getByText(/navigation/i));
    expect(context.onOpenNav).toHaveBeenCalled();
  });

  it('should call onOpenSearch', async () => {
    const user = userEvent.setup();

    wrapper(<HeaderBody />, { context });

    await user.click(screen.getByText(/search/i));
    expect(context.onOpenSearch).toHaveBeenCalled();
  });
});
