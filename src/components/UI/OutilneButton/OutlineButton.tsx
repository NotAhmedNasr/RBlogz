import classes from './OutlineButton.module.css';
import React, { FC } from 'react';

interface Props {
    tone: BtnTone,
    disabled?: boolean,
    submit?: boolean,
    onClick?: any,
}

export enum BtnTone {
    dark, light ,blue
}

const OutlineButton:FC<Props> = ({children, tone, disabled, submit, onClick}) => {
    
    const style = [];
    style.push(classes.OutlineButton);

    switch (tone) {
        case BtnTone.dark:
            style.push(classes.Dark);
            break;
        case BtnTone.light:
            style.push(classes.Light);
            break;
        case BtnTone.blue:
            style.push(classes.Blue);
            break;
        default:
            break;
    }
    
    return (
    <button 
        className={style.join(' ')} 
        type={submit ? 'submit' : 'button'}
        disabled={disabled}
        onClick={onClick}>
        {children}
    </button>
    );
};

export default OutlineButton;