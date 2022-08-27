import * as api from "../../api";

export const signIn = (data, navigate) => async (dispatch) => {
  const { email, password } = data;
  try {
    const response = await api.loginUser(email, password);
    dispatch({ type: "AUTH", payload: response.data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (data, navigate) => async (dispatch) => {
  try {
    const response = await api.registerUser(data);
    dispatch({ type: "AUTH", payload: response.data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
