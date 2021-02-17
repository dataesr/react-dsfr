import '@testing-library/jest-dom';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import AccordionLine from './AccordionLine';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
  title: 'title',
  id: '00',
  children: 'accordion line',
  onClick: () => {},
};

describe('<AccordionLine />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = (props = {}) => shallow(
      <AccordionLine
        title={props.title}
        onClick={props.onClick}
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
    const onClickSpy = jest.fn();
    const props = {
      title: 'title',
      id: '01',
      children: 'accordion line',
      onClick: onClickSpy,
    };

    const component = wrapper({ ...props });
    component.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
