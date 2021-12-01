import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Tile from '../Tile';
import TileBody from '../TileBody';
import TileImage from '../TileImage';

Enzyme.configure({ adapter: new Adapter() });

const mockSetonClickTile = jest.fn();

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
  let wrapper;

  beforeEach(() => {
    wrapper = () => shallow(
      <Tile
        onClick={mockSetonClickTile}
        horizontal={initialProps.horizontal}
        className={initialProps.className}
        data-testid="tile"
      >
        <TileBody
          title={initialProps.title}
          description={initialProps.description}
          linkTitle={initialProps.linkTitle}
          linkTarget={initialProps.linkTarget}
          data-test-id="tilebody"
        >
          <p>Du texte aussi</p>
        </TileBody>
        <TileImage
          alt={initialProps.alt}
          src={initialProps.src}
          data-id="titleimage"
        />
      </Tile>,
    );
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <Tile
          onClick={mockSetonClickTile}
          horizontal={initialProps.horizontal}
          className={initialProps.className}
          data-testid="tile"
        >
          <TileBody
            title={initialProps.title}
            description={initialProps.description}
            linkTitle={initialProps.linkTitle}
            linkTarget={initialProps.linkTarget}
            data-test-id="tilebody"
          >
            <p>Du texte aussi</p>
          </TileBody>
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

  it('on onClickTile', () => {
    const component = wrapper({ ...initialProps });
    component.find('[role="button"]').simulate('click', { preventDefault: () => {} });
    expect(mockSetonClickTile).toHaveBeenCalledTimes(1);
  });
});
