
export function countDuplicateObjectsBasedOnKeys(array) {
  let countObject = {};
  // checking if the key of an object is duplicated
  array.forEach((elem) => {
    countObject[Object.keys(elem)] = (countObject[Object.keys(elem)] || 0) + 1;
  });
  return countObject;
}
