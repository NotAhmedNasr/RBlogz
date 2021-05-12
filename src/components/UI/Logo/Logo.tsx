import classes from './Logo.module.css';
import React from 'react';
import logo from '../../../assests/images/logo1.png';
import { Link } from 'react-router-dom';

interface Props {
    side: boolean,
}

const Logo = ({side}:Props) => {
    
    const style = [];
    style.push(classes.Logo);

    if (side)
        style.push(classes.Side);

    return (
    <Link to='/' className={style.join(' ')}>
        <div className={classes.ImgLogo}>
            <img src={logo} alt='logo' />
        </div>
        <h2>RBlogz</h2>
    </Link>
);};

export default Logo;