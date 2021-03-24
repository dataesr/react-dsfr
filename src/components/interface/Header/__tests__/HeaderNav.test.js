import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  HeaderNav,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<HeaderNav />', () => {
  let wrapper;
  const context = {
    isMobile: true,
    onOpenNav: jest.fn(),
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
        <HeaderNav>
          <li>
            nav #1
          </li>
        </HeaderNav>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have rf-header__popin--expanded class when isOpenNav is true', () => {
    wrapper(<HeaderNav><li>nav #1</li></HeaderNav>, { ...context, isOpenNav: true });
    expect(screen.getByRole('button')).toHaveClass('rf-fi-close-line');
  });

  it('should call onOpenNav', () => {
    wrapper(<HeaderNav closeButton="close"><li>nav #1</li></HeaderNav>, { context });
    userEvent.click(screen.getByText(/close/i));
    expect(context.onOpenNav).toHaveBeenCalled();
  });
});
