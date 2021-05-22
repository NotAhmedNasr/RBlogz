import classes from './UserSummary.module.css';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Author } from '../../../Models/Blog';
import Profile from '../../../assests/images/Profile.png';

interface Props {
    theme: string,
    user: Author,
}

const UserSummary: FC<Props> = ({ theme, user }) => {
    const infoStyle = [];
    infoStyle.push(classes.Info);

    theme === 'light' && infoStyle.push(classes.Light);
    theme === 'dark' && infoStyle.push(classes.Dark);

    return (
        <div className={classes.UserSummary}>
            <div className={classes.Image}>
                <img src={user.profilePic || Profile} alt='user' />
            </div>
            <div className={infoStyle.join(' ')}>
                <div>{user.firstname + ' ' + user.lastname}</div>
                <div></div>
                <div>@{user.username}</div>
            </div>
            <Link to={`/account/${user._id}`}></Link>
        </div>
    );
}

export default UserSummary;