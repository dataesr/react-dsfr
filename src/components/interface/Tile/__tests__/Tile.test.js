import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Tile from '../Tile';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  horizontal: true,
  verticalMedium: true,
  title: 'title',
  linkHref: '/path',
  description: 'description',
  className: 'my-class',
};

describe('<Tile />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Tile
          linkHref={initialProps.linkHref}
          horizontal={initialProps.horizontal}
          description={initialProps.description}
          title={initialProps.title}
          className={initialProps.className}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
