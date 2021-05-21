import classes from './UserSummary.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    theme: string
}

const UserSummary = ({theme}: Props) => {
    const infoStyle = [];
    infoStyle.push(classes.Info);

    theme === 'light' && infoStyle.push(classes.Light);
    theme === 'dark' && infoStyle.push(classes.Dark);

    return (
        <div className={classes.UserSummary}>
            <div className={classes.Image}>
                <img src={'https://image.flaticon.com/icons/png/512/147/147144.png'} alt='user' />
            </div>
            <div className={infoStyle.join(' ')}>
                <div>FirstName LastName</div>
                <div></div>
                <div>@username</div>
            </div>
            <Link to='/account/5'></Link>
        </div>
    );
}

export default UserSummary;