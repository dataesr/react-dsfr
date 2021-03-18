import { Component } from 'react';
import { CHILDREN_TYPE } from '../src/utils/types';
import '@gouvfr/all/dist/css/all.min.css';

export default class Wrapper extends Component {
  componentDidMount() {
    document.documentElement.setAttribute('data-rf-reset', '');
    document.documentElement.setAttribute('data-rf-theme', 'light');
    document.documentElement.setAttribute('lang', 'fr');
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

Wrapper.propTypes = {
  children: CHILDREN_TYPE.isRequired,
};
