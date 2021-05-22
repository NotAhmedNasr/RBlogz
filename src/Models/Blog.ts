
export interface Author {
    _id: string,
    firstname: string,
    lastname: string,
    profilePic?: string,
    username?: string,
}

export default class Blog {
    constructor (public title:string, public body:string, public imageUrl?: string,
        public tags?: string[], public author?: Author, public likers?: string[],
        public comments?: string[], public createdAt?: string,
        public _id?: string,) {
    };
}