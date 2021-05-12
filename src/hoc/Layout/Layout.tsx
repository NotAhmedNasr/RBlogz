import classes from './Layout.module.css';
import React, { Fragment, FunctionComponent, useState } from 'react';
import SideNav from '../../components/Navigation/SideNav/SideNav';
import TopNav from '../../components/Navigation/TopNav/TopNav';

const Layout: FunctionComponent = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const backdropClickHandle = () => {
        setSideNavOpen(false);
    }

    const sideToggleClickHandle = () => {
        setSideNavOpen(!sideNavOpen);
    }

    return (
        <Fragment>
            <TopNav sideToggleClick={sideToggleClickHandle}/>
            <SideNav backdropClick={backdropClickHandle} open={sideNavOpen}/>
            <main className={classes.Main}>{children}</main>
        </Fragment>
    );
}

export default Layout;