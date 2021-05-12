import classes from './OutlineButton.module.css';
import React, { FC } from 'react';

interface Props {
    light?: boolean,
    dark?: boolean,
}

const OutlineButton:FC<Props> = ({children, light, dark}) => {
    
    const style = [];
    style.push(classes.OutlineButton);

    if (dark)
        style.push(classes.Dark);
    else if (light)
        style.push(classes.Light);
    
    return (
    <button className={style.join(' ')}>
        {children}
    </button>
    );
};

export default OutlineButton;