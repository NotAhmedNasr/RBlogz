import classes from './Comment.module.css';
import React from 'react';
import UserSummary from '../User/UserSummary/UserSummary';

const Comment = () => {


    return (
        <div className={classes.Comment}>
            <UserSummary theme='dark'/>
            <div className={classes.Body}>
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
                this is a comment thiss is a comment
            </div>
        </div>
    );
}

export default Comment;