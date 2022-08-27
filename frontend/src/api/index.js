import axios from "axios";

let token;
if (localStorage.getItem("profile")) {
  token = JSON.parse(localStorage.getItem("profile")).token;
}

export const fetchPosts = async () => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = await axios.get(url);
  return response.data;
};

export const createPost = async (post) => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = await axios.post(url, post, {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updatePost = async (id, post) => {
  const url = process.env.REACT_APP_BASE_URL + "posts/" + id;
  const response = await axios.patch(url, post, {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deletePost = async (id) => {
  const url = process.env.REACT_APP_BASE_URL + "posts/" + id;
  const response = await axios.delete(url, {
    headers: { authorization: `Bearer ${token}` },
  },id);
  return response;
};

export const updateLikeCount = async (id) => {
  console.log("token is ", token);
  const url = process.env.REACT_APP_BASE_URL + "posts/likePost/" + id;
  const response = await axios.patch(url, id, {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const loginUser = async (email, password) => {
  try {
    const url = process.env.REACT_APP_BASE_URL + "auth/login";
    const response = await axios.post(url, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (error.response.data.message) {
      alert(error.response.data.message);
    } else {
      console.log(error);
    }
  }
};

export const registerUser = async (data) => {
  try {
    const url = process.env.REACT_APP_BASE_URL + "auth/register";
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response.data.message) {
      alert(error.response.data.message);
    } else {
      console.log(error);
    }
  }
};
