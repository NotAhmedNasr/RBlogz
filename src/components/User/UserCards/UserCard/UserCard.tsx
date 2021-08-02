import classes from './UserCard.module.css';
import React, { FC } from 'react';
import Profile from './../../../../assests/images/Profile.png';
import { IconContext } from 'react-icons';
import { FcDocument, FcReading } from 'react-icons/fc';
import OutlineButton, { BtnTone } from '../../../UI/OutilneButton/OutlineButton';
import User from '../../../../Models/User';
import { Link } from 'react-router-dom';

interface Props {
    user: User
}

const UserCard: FC<Props> = ({user}) => {

    return (
        <div className={classes.UserCard}>
            <div className={classes.Image}>
                <img src={user.profilePic || Profile} alt="Profile-img" />
            </div>
            <div className={classes.Info}>
                <div>{`${user.firstname} ${user.lastname}`}</div>
                <div></div>
                <div>@{user.username}</div>
                <div className={classes.Spacer}></div>
                <div className={classes.Counts}>
                    <div>
                        <IconContext.Provider value={{}}>
                            <FcDocument />
                        </IconContext.Provider>
                        <div>{user.blogs?.length}</div>
                    </div>
                    <div>
                        <IconContext.Provider value={{}}>
                            <FcReading />
                        </IconContext.Provider>
                        <div>{user.followers?.length}</div>
                    </div>
                </div>
            </div>
            <div className={classes.Actions}>
                <OutlineButton tone={BtnTone.blue}>Follow</OutlineButton>
                <OutlineButton tone={BtnTone.dark}>
                    <Link to={`/account/${user._id}`}>Visit Page</Link>
                </OutlineButton>
            </div>
        </div>
    );
}

export default UserCard;