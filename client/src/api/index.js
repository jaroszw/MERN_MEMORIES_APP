import axios from 'axios';

const urlPost = 'http://localhost:5000/posts';
const urlAuth = 'http://localhost:5000/auth';

export const fetchPosts = () => axios.get(urlPost);
export const createPost = (newPost) => axios.post(urlPost, newPost);
export const likePost = (id) => axios.patch(`${urlPost}/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${urlPost}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlPost}/${id}`);

// auth actions

export const signin = (userData) => axios.post(urlAuth, userData);
export const signup = (userData) => axios.post(`${urlAuth}/signup`, userData);
