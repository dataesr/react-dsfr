import '@testing-library/jest-dom';
import TextInput from './TextInput';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

const onChangeSpy = jest.fn();
const initialProps = {
    value: 'init-value',
    label: 'label',
    onChange: onChangeSpy
};

describe('<TextInput />', () => {

    let wrapper;
    const event = {
        target: {
            value: 'New value'
        }
    };

    beforeEach(() => {
        wrapper = (props = {}) => {
            return shallow(
                <TextInput {...props} />
            );
        };
    });

    it('renders correctly', () => {
        const component = renderer
            .create( <TextInput {...initialProps} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    it('props value of TextInput', () => {
        const initialProps = {
            value: 'test-value',
            label: 'test-label',
            onChange: onChangeSpy
        };
        const component = wrapper(initialProps);
        expect(component.find('input').prop('value')).toBe('test-value');
        expect(component.find('label').text()).toBe('test-label');
    });

    test('onChange of TextInput', () => {
        const component = wrapper(initialProps);
        component.find('input').simulate('change', event);
        expect(onChangeSpy).toHaveBeenCalledWith(event);
    });
});