import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Link from '../Link';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  size: 'lg',
  title: 'title',
  href: '/page',
  icon: 'alert-fill',
  children: 'test button',
};

describe('<Link />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Link
          href={initialProps.href}
          icon={initialProps.icon}
          size={initialProps.size}
          title={initialProps.title}
        >
          {initialProps.children}
        </Link>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
