import React, { FC } from 'react'
import CommentModel from '../../../Models/Comment';
import Comment from '../Comment';

interface Props {
    comments: CommentModel[],
    unComment: any,
}

const Comments: FC<Props> = ({comments, unComment}) => {

    return (
        <>
            {comments.map((c, i) => (
                <Comment unComment={unComment} comment={c} key={i}/>
            ))}
        </>
    );
}

export default Comments;