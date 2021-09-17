import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../Icon';

const initialProps = {
  name: 'name',
  iconPosition: 'right',
  title: 'title',
  verticalAlign: true,
  as: 'span',
  size: 'sm',
  className: 'test',
  children: 'Icon text',
};

describe('<Icon />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(<Icon {...initialProps}><p>{initialProps.children}</p></Icon>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
