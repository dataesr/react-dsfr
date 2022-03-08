const getAll = (props) => {
  const newProps = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-') || key === 'id') {
      newProps[key] = props[key];
    }
  });

  return newProps;
};

const filterAll = (props) => {
  const newProps = {};

  Object.keys(props).forEach((key) => {
    if (!key.startsWith('data-') && key !== 'id') {
      newProps[key] = props[key];
    }
  });

  return newProps;
};

export default { getAll, filterAll };
