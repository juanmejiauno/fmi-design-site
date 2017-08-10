/**
 * checks whether proptype is required.
 * if Component.propType[prop].isRequired is undefined, then it's required
 *
 * @public
 * @param {React.Component} comp component to test
 * @param {string} prop name of prop
 * @returns {Boolean} true if prop is required
 */
export default (comp, prop) => {
  return comp.propTypes[prop].isRequired === undefined;
};
