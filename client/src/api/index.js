import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer: ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts", { withCredentials: true });
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// auth actions

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);
<<<<<<< HEAD
export const googleSignIn = (formData) =>
  API.post(`/user/googlesignin`, formData);
=======
export const googleSingin = (tokenId) =>
  API.post(`/user/googlesingin`, tokenId);
>>>>>>> d7cd1e4435e0611bd10a62d7e37af6124a6f5300
