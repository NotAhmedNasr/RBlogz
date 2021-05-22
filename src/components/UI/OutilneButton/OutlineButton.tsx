import classes from './OutlineButton.module.css';
import React, { FC } from 'react';

interface Props {
    tone: BtnTone,
    disabled?: boolean,
    submit?: boolean,
}

export enum BtnTone {
    dark, light ,blue
}

const OutlineButton:FC<Props> = ({children, tone, disabled, submit}) => {
    
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
        disabled={disabled}>
        {children}
    </button>
    );
};

export default OutlineButton;