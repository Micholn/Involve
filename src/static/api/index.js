import axios from "axios";

const url = "http://localhost:5000/posts";

API.interceptors.request.use((req) => {
    if(localStorage.getItem(

export const fetchPosts = () => API.get("./posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
