import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@cfaester/enzyme-adapter-react-18';
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
          data-testid="tile"
        >
          <TileBody
            title={initialProps.title}
            linkHref={initialProps.linkHref}
            description={initialProps.description}
            linkTitle={initialProps.linkTitle}
            linkTarget={initialProps.linkTarget}
            data-test-id="tilebody"
          />
          <TileImage
            alt={initialProps.alt}
            src={initialProps.src}
            data-id="titleimage"
          />
        </Tile>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
