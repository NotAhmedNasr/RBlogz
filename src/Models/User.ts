class User {
    constructor(public _id: string | null, public username: string, public email: string,
        public firstname: string, public lastname: string, public password?: string,
        public birthDate?: string, public profilePic?: string, public followers?: string[], 
        public followung?: string[], public token?: string, public createdAt?: string) {}
} 

export default User;