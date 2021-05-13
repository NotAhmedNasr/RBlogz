import React from 'react';
import classes from './ImageCircle.module.css';

interface Props {
    passedClass: string,
    url: string,
}

const ImageCircle = ({ passedClass, url }: Props) => (
    <div className={[classes.ImageCircle, passedClass].join(' ')}>
        <div className={classes.Image}>
            <img src={url} alt='personal-pic' />
        </div>
       
    </div>
);

export default ImageCircle;