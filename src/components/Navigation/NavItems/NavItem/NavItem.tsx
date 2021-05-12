import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import classes from './NavItem.module.css';

interface Props  {
    link: string,
   // active: boolean,
}

const NavItem: FunctionComponent<Props> = ({ children, link }) => {
    return (
        <li className={classes.NavItem}>
            <Link to={link} >{children}</Link>
        </li>
    );
}

export default NavItem;