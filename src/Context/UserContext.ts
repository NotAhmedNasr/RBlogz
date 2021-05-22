import {createContext} from 'react';
import User from '../Models/User';

export interface UserContext {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
}

const userContext = createContext<UserContext | null>(null);

export default userContext;