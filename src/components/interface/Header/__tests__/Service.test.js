import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Service,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<Service />', () => {
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
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Service
          title="title"
          description="description service"
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have button with navigation as text', () => {
    const { getByText } = wrapper(<Service
      title="title"
      description="description service"
    />, { context });
    expect(getByText(/navigation/i).textContent).toBe('navigation');
  });

  it('should call onOpenNav', () => {
    wrapper(<Service
      title="title"
      description="description service"
    />, { context });
    userEvent.click(screen.getByText(/navigation/i));
    expect(context.onOpenNav).toHaveBeenCalled();
  });

  it('should call onOpenSearch', () => {
    wrapper(<Service
      title="title"
      description="description service"
    />, { context });
    userEvent.click(screen.getByText(/search/i));
    expect(context.onOpenSearch).toHaveBeenCalled();
  });
});
