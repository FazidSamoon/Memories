import axios from "axios";

export const fetchPosts = async () => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = await axios.get(url);
  return response.data;
};

export const createPost = async (post) => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = await axios.post(url, post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const url = process.env.REACT_APP_BASE_URL + "posts/" + id;
  const response = await axios.patch(url, post);
  return response.data;
};

export const deletePost = async (id) => {
  const url = process.env.REACT_APP_BASE_URL + "posts/" + id;
  const response = await axios.delete(url, id);
  return response;
};

export const updateLikeCount = async (id) => {
  const url = process.env.REACT_APP_BASE_URL + "posts/likePost/" + id;
  const response = await axios.patch(url, id);
  return response.data;
};

export const loginUser = async (email, password) => {
  const url = process.env.REACT_APP_BASE_URL + "auth/login";
  const response = await axios.post(url, { email: email, password: password });
  return response.data;
};

export const registerUser = async (data) => {
  const url = process.env.REACT_APP_BASE_URL + "auth/register";
  const response = await axios.post(url, data);
  return response.data;
};
