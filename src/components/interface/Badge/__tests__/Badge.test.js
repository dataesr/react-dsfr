import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Badge from '../Badge';

Enzyme.configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  it('should render Badge properly', () => {
    render(
      <Badge
        className="custom-class"
        data-testid="badge"
        text="text"
        type="success"
        small
      />,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toMatchSnapshot();
  });
});
