import classes from './Comment.module.css';
import React, { FC, useContext } from 'react';
import UserSummary from '../User/UserSummary/UserSummary';
import CommentModel from '../../Models/Comment';
import { IconContext } from 'react-icons';
import { FcFullTrash } from 'react-icons/fc';
import userContext from '../../Context/UserContext';

interface Props {
    comment: CommentModel,
    unComment: any,
}

const Comment: FC<Props> = ({ comment, unComment }) => {
    const context = useContext(userContext);

    const unCommentHandle = () => {
        unComment(comment._id);
        console.log('uncomment');
    }

    return (
        <div className={classes.Comment}>
            <UserSummary user={comment.author!} theme='dark' />
            <div className={classes.Body}>
                {comment.body}
            </div>

            {context?.user?._id === comment.author?._id ? (
                <div className={classes.Icon}>
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FcFullTrash onClick={unCommentHandle} />
                    </IconContext.Provider>
                </div>) : null}
        </div>
    );
}

export default Comment;