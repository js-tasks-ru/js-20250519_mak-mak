/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  let nodes = path.split(".");
  let countIteration = 0;

  return function getter(obj) {
    let objKeys = Object.keys(obj);

    if (objKeys.indexOf(nodes[countIteration]) === -1) {
      return;
    }
    else if (countIteration === nodes.length - 1
      && objKeys.indexOf(nodes[countIteration]) !== -1) {
      let result = obj[nodes[countIteration]];
      countIteration = 0;
      return result;
    }
    else {
      let innerObj = obj[nodes[countIteration]];
      countIteration++;
      return getter(innerObj);
    }
  };
}
