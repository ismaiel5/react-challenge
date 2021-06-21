import ApiConstant from "../Info/constants";

export async function getUsersData() {
  const requestUrl = ApiConstant.USERS_URL;

  const res = await fetch(requestUrl);
  const json = await res.json();
  if (res.status === 200) {
    return {
      users: json.data,
    };
  } else return false;
}
