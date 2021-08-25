export default (props, omit = false) => {
  const newProps = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      if (!omit) {
        newProps[key] = props[key];
      }
    } else if (omit) {
      newProps[key] = props[key];
    }
  });

  return newProps;
};
