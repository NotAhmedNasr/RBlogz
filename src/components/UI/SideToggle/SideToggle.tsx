import React from 'react';
import classes from './SideToggle.module.css';

interface Props {
    sideToggleClick: any,
}

const SideToggle = ({ sideToggleClick }: Props) => {

    return (
        <button className={classes.SideToggle} onClick={sideToggleClick}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
}

export default SideToggle;