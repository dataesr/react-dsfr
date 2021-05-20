import renderer from 'react-test-renderer';
import { MegaNavSubItem } from '../index';
import Link from '../../Link';

describe('<MegaNavSubItem />', () => {
  const initialProps = {
    title: 'title',
    link: 'link',
  };

  it('renders correctly', () => {
    const component = renderer
      .create(
        <MegaNavSubItem title={initialProps.title} link={initialProps.link}>
          <Link title="title" href="/">Link #1</Link>
        </MegaNavSubItem>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
