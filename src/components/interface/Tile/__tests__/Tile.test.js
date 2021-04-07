import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Tile from '../Tile';
import TileBody from '../TileBody';
import TileImage from '../TileImage';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  horizontal: true,
  verticalMedium: true,
  title: 'title',
  linkTitle: 'linkTitle',
  linkHref: '/path',
  linkTarget: 'linkTarget',
  alt: '',
  src: '/src.png',
  description: 'description',
  className: 'my-class',
};

describe('<Tile />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <Tile
          horizontal={initialProps.horizontal}
          className={initialProps.className}
        >
          <TileBody
            title={initialProps.title}
            linkHref={initialProps.linkHref}
            description={initialProps.description}
            linkTitle={initialProps.linkTitle}
            linkTarget={initialProps.linkTarget}
          />
          <TileImage
            alt={initialProps.alt}
            src={initialProps.src}
          />
        </Tile>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
