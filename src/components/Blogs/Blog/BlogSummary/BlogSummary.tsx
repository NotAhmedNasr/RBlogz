import classes from './BlogSummary.module.css';
import React, { FC } from 'react';
import { IconContext } from 'react-icons/lib';
import { FcComments, FcLike } from 'react-icons/fc';
import Placeholder from '../../../../assests/images/Placeholder.jpg';
import Profile from '../../../../assests/images/Profile.png';
import { Author } from '../../../../Models/Blog';

interface Props {
    title: string,
    author: Author,
    date: string,
    likes: number,
    comments: number,
    image: string,
}

const BlogSummary: FC<Props> = ({title, author, date, likes, comments, image}) => {


    return (
        <div className={classes.BlogSummary}>
            <div className={classes.Image}>
                <img src={image || Placeholder} alt='blog' />
            </div>
            <div className={classes.Heading}>
                <h2>{title}</h2>
                <span>By</span>
                <div className={classes.Author}>
                    <div className={classes.AuthorImage}>
                        <img src={author.profilePic || Profile} alt='author' />
                    </div>
                    <h3>{author.firstname + ' ' + author.lastname}</h3>
                </div>
            </div>

            <div>
                {new Date(date).toLocaleDateString('en-gb', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })} &nbsp; {new Date(date).toLocaleTimeString()}
            </div>

            <div className={classes.Info}>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcLike />
                    </IconContext.Provider>
                    &nbsp;
                    <span>{likes}</span>
                </div>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcComments />
                    </IconContext.Provider>
                    &nbsp;
                    <span>{comments}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogSummary;