import classes from './Backdrop.module.css';
import React from 'react';

interface Props {
    backdropClicked: any,
    show: boolean,
}

const Backdrop = ({backdropClicked, show}: Props) => 
    <div 
        onClick={backdropClicked} 
        className={show ? classes.Backdrop : ''}>

    </div>;


export default Backdrop;