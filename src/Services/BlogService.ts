import axios from '../axios/axios';
import Blog from '../Models/Blog';

export const addBlog = (blog: Blog) => {
    return axios.post('/blog', blog);
}

export const getAllBlogs = () => {
    return axios.get('/blog');
}

export const getFollowing = () => {
    return axios.get('/blog/following');
}

export const getOne = (id: string) => {
    return axios.get(`/blog/${id}`);
}

export const like = (id: string) => {
    return axios.patch(`/blog/like/${id}`);
}

export const unLike = (id: string) => {
    return axios.patch(`/blog/unlike/${id}`);
}