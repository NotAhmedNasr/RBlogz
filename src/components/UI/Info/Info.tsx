import classes from './Info.module.css';
import React, { FC } from 'react';

interface Props {
    text: string,
}

const Info:FC<Props> = ({children, text}) => (
    <div className={classes.Info}>
        <i className={classes.Icon}>
            {children}
        </i>
        <span className={classes.Text}>
            {text}
        </span>
    </div>
);

export default Info;