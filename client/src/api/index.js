import axios from 'axios';

// const url = 'http://localhost:5000/posts';  // LOCAL
const url = 'https://memories-project-mern-appl.herokuapp.com/posts';  // PROD
export const fetchPosts = () => {
    return axios.get(url);
}

export const createPost = (newPost) => {
    return axios.post(url, newPost);
}

export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
}

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
}

export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`);
}