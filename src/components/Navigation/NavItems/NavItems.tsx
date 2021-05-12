import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const NavItems = () => {
    const links = [
        {link: 'login', text: 'Login'},
        {link: 'register', text: 'Register'},
        {link: 'about', text: 'About'},
        {link: 'report', text: 'Report'},
    ]

    return (
        <ul className={classes.NavItems}>
            {links.map(l => {
                return <NavItem key={l.link} link={l.link}>{l.text}</NavItem>
            })}
        </ul>
    );
}

export default NavItems;