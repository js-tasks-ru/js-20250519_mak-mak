/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return '';
  }

  if (!size) {
    return string;
  }

  let newArr = [];
  let counter = 0;
  let lastSymbol = null;

  for (let symbol of string) {
    if (symbol === lastSymbol) {
      counter += 1;
    } else {
      counter = 1;
      lastSymbol = symbol;
    }

    if (counter <= size) {
      newArr.push(symbol);
    }
  }

  return newArr.join("");
}
