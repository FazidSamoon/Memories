import axios from "axios";

export const fetchPosts = () => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = axios.get(url);
  return response;
};

export const createPost = (post) => {
  const url = process.env.REACT_APP_BASE_URL + "posts";
  const response = axios.post(url, post);
  return response;
};
