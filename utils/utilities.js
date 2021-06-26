export function countDuplicateObjectsBasedOnKeys(array) {
  let countObject = {};
  // checking if the key of an object is duplicated
  array.forEach((elem) => {
    countObject[Object.keys(elem)] = (countObject[Object.keys(elem)] || 0) + 1;
  });
  return countObject;
}

export function generateAlphaNumericObject() {
  let values = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 30; i++) values += possible.charAt(Math.floor(Math.random() * possible.length));

  return { "Alphanumerics Objects": values };
}

export function generateAlphabitObject() {
  let values = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 30; i++) values += possible.charAt(Math.floor(Math.random() * possible.length));

  return { "Alphabetical Objects": values };
}

export function getRandomFloatNumObject() {
  const values = (Math.random() * 1000).toFixed(5);
  return { "Float Numbers Objects": values };
}

export function getRandomIntObject() {
  const values = Math.ceil(Math.random() * 100000);
  return { "Integers Objects" : values };
}

export function runGeneratingFuncRandomly(numerOfTimes) {
  let initialCount = 0;
  let objectArray = [];

  do {
    const randomNum = Math.floor(Math.random() * 4);
    switch (randomNum) {
      case 0:
        objectArray.push(generateAlphaNumericObject());
        break;
      case 1:
        objectArray.push(generateAlphabitObject());
        break;
      case 2:
        objectArray.push(getRandomIntObject());
        break;
      case 3:
        objectArray.push(getRandomFloatNumObject());
      default:
        break;
    }
    initialCount++;
  } while (initialCount < numerOfTimes);

  return objectArray;
}