import { removeMsg } from "../../utils/common";
import axios from "../../api/apiClient";
export async function userLogin(user, setMessage) {
  try {
    const response = await axios.post("/auth/login", user);

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

export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get("/users");
    dispatch({ type: "GET_USER", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USER", payload: {} });
  }
};

export async function userRegister(user, setMessage) {
  try {
    const response = await axios.post("auth/register", user);
    if (response.data.status) window.location = "/";
  } catch (err) {
    const errorMsg = err.message;
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
  }
}

export const getUsersCount = async (setUsersCount) => {
  try {
    const result = await axios.get("admin/users/count");
    setUsersCount(result.data);
  } catch (err) {
    setUsersCount(0);
  }
};
