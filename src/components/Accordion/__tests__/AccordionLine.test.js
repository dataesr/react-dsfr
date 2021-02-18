import { useState as useStateMock } from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AccordionLine from '../AccordionLine';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const initialProps = {
  title: 'title',
  id: '00',
  children: 'accordion line',
};

describe('<AccordionLine />', () => {
  let wrapper;
  const setState = jest.fn();
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
    wrapper = (props = {}) => shallow(
      <AccordionLine
        title={props.title}
        id={props.id}
      >
        {props.children}
      </AccordionLine>,
    );
  });

  it('renders correctly', () => {
    const component = renderer
      .create(
        <AccordionLine
          title={initialProps.title}
          onClick={initialProps.onClick}
          id={initialProps.id}
        >
          {initialProps.children}
        </AccordionLine>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('onClick AccordionLine', () => {
    const props = {
      title: 'title',
      id: '01',
      children: 'accordion line',
    };

    const component = wrapper({ ...props });
    component.find('button').simulate('click');
    expect(setState).toHaveBeenCalledTimes(1);
  });
});
