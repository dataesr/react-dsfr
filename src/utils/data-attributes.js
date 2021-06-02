export default (props) => {
  const newProps = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      newProps[key] = props[key];
    }
  });

  return newProps;
};
