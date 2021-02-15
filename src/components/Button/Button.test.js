import '@testing-library/jest-dom';
import Button from './Button';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const initialProps = {
    size: 'lg',
    title: 'title',
    icon: 'alert-fill',
    secondary: true,
    children: 'test button',
};

describe('<Button />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = (props = {}) => {
            return shallow(
                <Button {...initialProps}>{props.children}</Button>
            );
        };
    });

    it('renders correctly', () => {
        const component = renderer
            .create(<Button {...initialProps}>{initialProps.children}</Button>)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    test('renders small Button', () => {
        const initialProps = {
            size: 'sm',
            children: 'basic sm button',
        };

        const component = wrapper({ ...initialProps });
        expect(component.find('button').text()).toBe('basic sm button');
    });
});
