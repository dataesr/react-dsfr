import { Component } from 'react';
import { CHILDREN_TYPE } from '../src/utils/variables';
import '@gouvfr/all/dist/css/all.min.css';

export default class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}

Wrapper.propTypes = {
  children: CHILDREN_TYPE.isRequired,
};
