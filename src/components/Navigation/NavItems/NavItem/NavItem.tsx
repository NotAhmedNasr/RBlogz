import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'
import classes from './NavItem.module.css';

interface Props  {
    link: string,
   active?: boolean,
}

const NavItem: FunctionComponent<Props> = ({ children, link, active }) => {
    const style = [];
    style.push(classes.NavItem);

    active && style.push(classes.Active);

    return (
        <li className={style.join(' ')}>
            <Link to={link} >{children}</Link>
        </li>
    );
}

export default NavItem;