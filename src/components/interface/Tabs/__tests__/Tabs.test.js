import renderer from 'react-test-renderer';
import { Tab, Tabs } from '../index';

describe('<Tabs />', () => {
  it('should render Tab properly', () => {
    const component = renderer
      .create(
        <Tabs>
          <Tab label="Label">Tab #1</Tab>
        </Tabs>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
