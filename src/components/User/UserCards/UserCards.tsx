import classes from './UserCards.module.css';
import React, { FC } from 'react'
import UserCard from './UserCard/UserCard';
import User from '../../../Models/User';

interface Props {
    users: User[]
}

const UserCards: FC<Props> = ({ users }) => {

    return (
        <div className={classes.UserCards}>
            {users.map((user, i) => (
                <div key={i}>
                    <UserCard user={user} />
                </div>
            ))}
        </div>
    );
}

export default UserCards;