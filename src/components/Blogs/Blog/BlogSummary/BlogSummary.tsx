import classes from './BlogSummary.module.css';
import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FcComments, FcLike } from 'react-icons/fc';
import Placeholder from '../../../../assests/images/Placeholder.jpg';
import Profile from '../../../../assests/images/Profile.png';

const BlogSummary = () => {


    return (
        <div className={classes.BlogSummary}>
            <div className={classes.Image}>
                <img src={Placeholder} alt='blog' />
            </div>
            <div className={classes.Heading}>
                <h2>This is Blog's Title</h2>
                <span>By</span>
                <div className={classes.Author}>
                    <div className={classes.AuthorImage}>
                        <img src={Profile} alt='author' />
                    </div>
                    <h3>Blog's Author</h3>
                </div>
            </div>

            <div>
                {new Date().toLocaleDateString('en-gb', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })} &nbsp; {new Date().toLocaleTimeString()}
            </div>

            <div className={classes.Info}>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcLike />
                    </IconContext.Provider>
                    &nbsp;
                    <span>15</span>
                </div>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcComments />
                    </IconContext.Provider>
                    &nbsp;
                    <span>10</span>
                </div>
            </div>
        </div>
    );
}

export default BlogSummary;