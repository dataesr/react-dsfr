import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render, cleanup } from '@testing-library/react';
import {
  Service,
} from '../index';
import HeaderContext from '../headerContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<Service />', () => {
  const context = {
    onOpenNav: jest.fn(),
    isMobile: true,
    isNavTool: true,
    navButton: 'navigation',
  };
  afterEach(() => cleanup);
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

  it('should call onOpenNav on click', () => {
    const { getByText } = render(
      <HeaderContext.Provider value={context}>
        <Service
          title="title"
          description="description service"
        />
        ,
      </HeaderContext.Provider>,
    );
    expect(getByText(/navigation/i).textContent).toBe('navigation');
  });
});
