/**
 * Ensures component type is not overwritten
 *
 * @param {string} expectedType - The expected type to validate against
 * @returns {func} Custom PropTypes validation function
 */

export default (expectedType) => (props, propName, componentName) => {
  let error;
  if (props[propName] !== expectedType) {
    error = new Error(`'${propName}' in '${componentName}'\n\nYou may NOT pass in a prop value for '${propName}'.`);
  }
  return error;
};
