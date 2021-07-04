import ApiConstant from "../Info/constants";

export async function getRandomObjects() {
  const requestUrl = ApiConstant.RANDOM_OBJECT_URL;
  let randomObjects;

  try {
    const res = await fetch(requestUrl);
    if (res.status === 200) {
      randomObjects = await res.json();
    } else {
      randomObjects = [];
    }
    return {
      randomObjects: randomObjects,
      statusCode: res.status,
    };
  } catch (error) {
    randomObjects = [];
  }
  return {
    randomObjects: randomObjects,
    statusCode: 503,
  };
}
