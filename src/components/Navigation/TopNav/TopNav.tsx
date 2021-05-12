import React from 'react';
import Logo from '../../UI/Logo/Logo';
import SideToggle from '../../UI/SideToggle/SideToggle';
import NavItems from '../NavItems/NavItems';
import classes from './TopNav.module.css';

interface Props {
    sideToggleClick: any,
}

const TopNav = ({sideToggleClick}: Props) => {
    return (
        <header className={classes.TopNav}>
            <SideToggle sideToggleClick={sideToggleClick}/>
            <Logo side={false}/>
            <nav className={classes.Nav}>
                <NavItems />
            </nav>
        </header>
    );
}

export default TopNav;