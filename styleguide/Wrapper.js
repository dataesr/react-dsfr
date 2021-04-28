import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Wrapper extends Component {
  componentDidMount() {
    document.documentElement.setAttribute('data-fr-theme', 'light');
    document.documentElement.setAttribute('lang', 'fr');
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
