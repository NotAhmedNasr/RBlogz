import classes from './SideNav.module.css';
import React, { Fragment } from 'react';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';

interface Props {
    open: boolean,
    backdropClick: any,
}

const SideNav = ({ open, backdropClick }: Props) => {

    let navStyle = [];
    navStyle.push(classes.SideNav);

    if (!open) {
        navStyle.push(classes.Hidden);
    }

    return (
        <Fragment>
            <Backdrop show={open} backdropClicked={backdropClick}/>
            <div className={navStyle.join(' ')}>
                <Logo side/>
                <NavItems />
            </div>
        </Fragment>
    );
}

export default SideNav;