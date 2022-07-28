import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Alert from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Alert />', () => {
  it('should render alert properly', () => {
    render(
      <Alert
        className="custom-class"
        data-testid="alert"
        title="Titre"
        description="Description"
      />,
    );
    const group = screen.getByTestId('alert');
    expect(group).toMatchSnapshot();
  });

  it('should hide alert on close', () => {
    const mockClick = jest.fn();

    const alert = shallow(
      <Alert
        data-testid="alert"
        title="Titre"
        closable
        onClose={mockClick}
      />,
    );

    expect(alert.find('.fr-alert').exists()).toBeTruthy();

    alert.find('.fr-alert > button').simulate('click');

    expect(alert.find('.fr-alert').exists()).toBeFalsy();
    expect(mockClick).toHaveBeenCalled();
  });
});
