import classes from './BlogDetails.module.css';
import React, { useState } from 'react';
import UserSummary from '../../../User/UserSummary/UserSummary';
import { IconContext } from 'react-icons';
import { FcComments, FcLike, FcLikePlaceholder } from 'react-icons/fc';
import OutlineButton, { BtnTone } from '../../../UI/OutilneButton/OutlineButton';
import Comment from '../../../Comment/Comment'

const BlogDetails = () => {
    const [commenting, setCommenting] = useState(false);
    const [comment, setComment] = useState('');

    let commentForm = commenting ? (
        <div className={classes.CommentForm}>
            <textarea
                placeholder='Leave a comment...'
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}></textarea>
            <div className={classes.CommentFormActions}>
                {comment !== '' && <div>
                    <OutlineButton tone={BtnTone.blue}>Post</OutlineButton>
                </div>}
            </div>
        </div>
    ) : null;

    return (
        <div className={classes.BlogDetails}>
            <h1>This Is Blog's Title</h1>
            <div className={classes.Author}>
                <span>By</span>
                <UserSummary theme='dark' />
            </div>
            <div className={classes.Image}>
                <img src={'https://assets.unenvironment.org/s3fs-public/styles/article_billboard_image/public/events/2019-09/sebastian-pena-lambarri-Sb7x-pgnsWI-unsplash.jpg?h=afb98ff0&itok=5A0HgjGn'} alt='blog' />
            </div>
            <div className={classes.Body}>
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
                This is blog's Body This is blog's Body This is blog's Body
            </div>
            <div className={classes.Tags}>
                {/* array of <Tag /> */}
            </div>
            <div className={classes.Actions}>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcLikePlaceholder />
                        <FcLike />
                    </IconContext.Provider>
                    &nbsp;
                    <span>15</span>
                </div>
                <div onClick={() => setCommenting(!commenting)}>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcComments />
                    </IconContext.Provider>
                    &nbsp;
                    <span>10</span>
                </div>
            </div>
            {commentForm}
            <div className={classes.Comments}>
                {/* array of <Comment /> */}
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}

export default BlogDetails;