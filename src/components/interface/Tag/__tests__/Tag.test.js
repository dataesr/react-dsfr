import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Tag, TagGroup } from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('<Tag />', () => {
  it('should renders Tag properly', () => {
    render(<Tag as="a" href="/" title="titre">tag-test</Tag>);
    const tag = screen.getByText('tag-test');
    expect(tag).toBeInTheDocument();
    expect(tag).toMatchSnapshot();
  });
  it('should renders small Tag properly', () => {
    render(<Tag small as="span">tag-test</Tag>);
    const tag = screen.getByText(/tag-test/i);
    expect(tag).toBeInTheDocument();
    expect(tag.className).toBe('fr-tag fr-tag--sm');
    expect(tag).toMatchSnapshot();
  });
  it('should renders TagGroup properly', () => {
    render(
      <TagGroup data-testid="taggroup">
        <Tag small as="span" data-testid="tag1">tag-test</Tag>
        <Tag small as="span" data-test-id="tag2">tag-test</Tag>
        <Tag small as="span" data-test--id="tag3">tag-test</Tag>
        <Tag small as="span" data-test="tag4">tag-test</Tag>
      </TagGroup>,
    );
    const tagGroup = screen.getByTestId('taggroup');
    expect(tagGroup).toBeInTheDocument();
    const tags = screen.getAllByText('tag-test');
    expect(tags[0].className).toBe('fr-tag fr-tag--sm');
    expect(tags).toHaveLength(4);
    expect(tagGroup).toMatchSnapshot();
  });

  test('onClick Tag', () => {
    const wrapper = (props = {}) => shallow(
      <Tag selected={props.selected} onClick={props.onClick} className="tag">tag-test</Tag>,
    );

    const mockClick = jest.fn();
    const props = {
      selected: false,
      onClick: mockClick,
    };

    const component = wrapper({ ...props });
    component.find('.tag').simulate('click', { preventDefault: () => {} });
    expect(mockClick).toHaveBeenCalled();
  });
});
