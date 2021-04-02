import React from 'react';

const withProps = (Component) => (props) => <Component {...props} />;
export default withProps;
