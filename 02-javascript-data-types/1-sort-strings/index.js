/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  return param === "desc"
    ? [...arr].sort((firstItem, secondItem) => secondItem.localeCompare(firstItem, ['ru', 'en'], { sensitivity: 'case', numeric: true, caseFirst: "upper" }))
    : [...arr].sort((firstItem, secondItem) => firstItem.localeCompare(secondItem, ['ru', 'en'], { sensitivity: 'case', numeric: true, caseFirst: "upper" }));
}
