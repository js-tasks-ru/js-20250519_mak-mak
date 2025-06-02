/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) {
    return;
  }

  let arrObj = Object.entries(obj);
  let newObj = {};

  for (let i = 0; i < arrObj.length; i++) {
    newObj[arrObj[i][1]] = arrObj[i][0];
  }

  return newObj;
}
