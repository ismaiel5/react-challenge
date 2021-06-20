
export function getdataTypes(array) {
  return array.reduce((acc, curr) => {
    // Check if the acc contains the type or not
    if (acc[typeof curr]) {
      // Increase the type with one
      acc[typeof curr]++;
    } else {
      /* If acc not contains the type 
                  then initialize the type with one */
      acc[typeof curr] = 1;
    }
    return acc;
  }, {}); // Initialize with an empty array
}
