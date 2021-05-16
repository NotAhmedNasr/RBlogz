import classes from './UserSummary.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const UserSummary = () => {

    return (
        <div className={classes.UserSummary}>
            <div className={classes.Image}>
                <img src={'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'} alt='user' />
            </div>
            <div className={classes.Info}>
                <div>FirstName LastName</div>
                <div></div>
                <div>@username</div>
            </div>
            <Link to='/account/5'></Link>
        </div>
    );
}

export default UserSummary;