class User {
    constructor(public _id: number, public username: string, public email: string,
        public firstname: string, public lastname: string, public password?: string,
        public birthDate?: Date, public profilePic?: string, public followers?: string[], 
        public followung?: string[], public token?: string) {}
} 

export default User;