import React, { useContext } from 'react';
import { useLocation } from 'react-router';
import userContext from '../../../Context/UserContext';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const NavItems = () => {
    const context = useContext(userContext);

    const location = useLocation();

    const fixedLinks = [
        { link: '/about', text: 'About' },
        { link: '/report', text: 'Report' },
    ];

    const unAuthLinks = [
        { link: '/login', text: 'Login' },
        { link: '/register', text: 'Register' },
    ];

    const authLinks = [
        { link: '/blog/new', text: 'New Blog' },
        { link: '/people', text: 'People' },
        { link: `/account/${context?.user?._id}`, text: 'Account' },
    ];

    const links = (context?.user ? authLinks : unAuthLinks).concat(fixedLinks);

    return (
        <ul className={classes.NavItems}>
            {links.map(l => {
                return <NavItem key={l.link} link={l.link} active={location.pathname === l.link}>{l.text}</NavItem>
            })}
            {context?.user ? <NavItem key={'logout'} link={'/logout'}>Logout</NavItem> : null}
        </ul>
    );
}

export default NavItems;