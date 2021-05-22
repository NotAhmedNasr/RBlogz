import axios from '../axios/axios';
import Comment from '../Models/Comment';

export const getComments = (blogId: string) => {
    return axios.get(`/comment/${blogId}`);
} 

export const postComment = (blogId: string, comment: Comment) => {
    return axios.post(`/comment/${blogId}`, comment);
}

export const deleteComment = (id: string) => {
    return axios.delete(`/comment/${id}`);
}
