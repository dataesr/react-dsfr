import PropTypes from 'prop-types';
import { Component } from 'react';
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
