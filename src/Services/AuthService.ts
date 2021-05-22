import User from "../Models/User";
import { UserContext } from '../Context/UserContext';

export const loginUser = (user: User, context: UserContext) => {
    context.setUser(user);
    localStorage.setItem('Authorization', user.token!);
    localStorage.setItem('user_id', user._id!);
}