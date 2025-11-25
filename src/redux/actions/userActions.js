import { removeMsg } from "../../assets/data";
import axios from "axios";
import { url } from "../../assets/data";
export async function userLogin(user, setMessage) {
  try {
    const response = await axios.post(url + "/login", user);

    if (response.data?.status) {
      const userRole = response.data.role;
      if (userRole !== "Admin") {
        window.location.href = "/";
      } else {
        window.location.href = "/admin";
      }
      return;
    }
   } catch (err) {
    const errorMsg = err.message;
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
  }
}

export const getUsersCount = async (setUsersCount) => {
  try {
    const result = await axios.get(url + `/users/count`);
    setUsersCount(result.data.count);
  } catch (err) {
    setUsersCount(0);
  }
};
