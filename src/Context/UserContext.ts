import {createContext} from 'react';
import User from '../Models/User';

interface Context {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
}

const UserContext = createContext<Context | null>(null);

export default UserContext;