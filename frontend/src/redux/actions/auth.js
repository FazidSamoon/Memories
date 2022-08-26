import * as api from "../../api";

export const signIn = (data, navigate) => async (dispatch) => {
  const { email, password } = data;
  try {
    const response = await api.loginUser(email, password);
    dispatch({ type: "LOGIN", payload: response });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (data, navigate) => async (dispatch) => {
  try {
    const response = await api.registerUser(data);
    dispatch({ type: "LOGIN", payload: response });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
