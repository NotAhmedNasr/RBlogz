import { Author } from "./Blog";

export default class CommentModel {
    constructor (public body:string,  
        public author?: Author, public createdAt?: string,
        public _id?: string,) {
    };
}