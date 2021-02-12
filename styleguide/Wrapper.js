import '@gouvfr/schemes/dist/css/schemes.min.css';
import { Component } from 'react';

export default class Wrapper extends Component {
    render() {
        return this.props.children;
    }
}