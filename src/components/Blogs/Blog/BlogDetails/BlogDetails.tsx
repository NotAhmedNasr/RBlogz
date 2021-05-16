import classes from './BlogDetails.module.css';
import React from 'react';
import UserSummary from '../../../User/UserSummary/UserSummary';

const BlogDetails = () => {

    return (
        <div className={classes.BlogDetails}>
            <h1>This Is Blog's Title</h1>
            <div className={classes.Author}>
                <UserSummary />
            </div>
            <div className={classes.Image}>
                <img src={''} alt='blog' />
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
            <div className={classes.Actions}></div>
            <div className={classes.CommentForm}></div>
            <div className={classes.Comments}>
                {/* array of <Comment /> */}
            </div>
        </div>
    );
}

export default BlogDetails;