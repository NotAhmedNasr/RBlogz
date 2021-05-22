import classes from './BlogDetails.module.css';
import React, { useContext, useEffect, useState } from 'react';
import UserSummary from '../../../User/UserSummary/UserSummary';
import { IconContext } from 'react-icons';
import { FcComments, FcLike, FcLikePlaceholder } from 'react-icons/fc';
import OutlineButton, { BtnTone } from '../../../UI/OutilneButton/OutlineButton';
import { useParams } from 'react-router';
import Blog from '../../../../Models/Blog';
import { getOne, like, unLike } from '../../../../Services/BlogService';
import Placeholder from '../../../../assests/images/Placeholder.jpg';
import Tag from '../../../Tag/Tag';
import Comments from '../../../Comment/Comments/Comments';
import { deleteComment, getComments, postComment } from '../../../../Services/CommentService';
import CommentModel from '../../../../Models/Comment';
import userContext from '../../../../Context/UserContext';

interface Params {
    id: string,
}

const BlogDetails = () => {
    const [commenting, setCommenting] = useState(false);
    const [comment, setComment] = useState('');
    const [blog, setBlog] = useState<Blog | null>(null);
    const [comments, setComments] = useState<CommentModel[]>([]);
    const [isLiked, setIsLiked] = useState(false);

    const { id }: Params = useParams();

    const context = useContext(userContext);

    useEffect(() => {
        getBlog(id);
        console.log('effect');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const checkIfLiked = (blog: Blog) => {
        blog.likers?.indexOf(context?.user?._id!) !== -1 ? setIsLiked(true) : setIsLiked(false);
    }

    const getBlog = (id: string) => {
        getOne(id).then(res => {
            setBlog(res.data);
            getBlogComments(id);
            checkIfLiked(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const getBlogComments = (id: string) => {
        getComments(id).then(res => {
            setComments(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    const likeHandle = () => {
        like(blog?._id!).then(res => {
            getBlog(id);
        }).catch(err => {
            console.log(err);
        });
    }

    const unLikeHandle = () => {
        unLike(blog?._id!).then(res => {
            getBlog(id);
        }).catch(err => {
            console.log(err);
        });
    }

    const addCommentHandle = () => {
        postComment(blog?._id!, new CommentModel(comment)).then(res => {
            getBlog(id);
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        setCommenting(false);
        setComment('');
    }

    const unComment = (id: string) => {
        deleteComment(id).then(res => {
            getBlog(blog?._id!);
        }).catch(err => {
            console.log(err);
        });
    }

    let commentForm = commenting ? (
        <div className={classes.CommentForm}>
            <textarea
                placeholder='Leave a comment...'
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}></textarea>
            <div className={classes.CommentFormActions}>
                {comment !== '' && <div>
                    <OutlineButton tone={BtnTone.blue} onClick={addCommentHandle}>Post</OutlineButton>
                </div>}
            </div>
        </div>
    ) : null;

    return (blog ? (
        <div className={classes.BlogDetails}>
            <h1>{blog?.title}</h1>
            <div className={classes.Author}>
                <span>By</span>
                <UserSummary theme='dark' user={blog?.author!} />
            </div>
            <div className={classes.Image}>
                <img src={blog?.imageUrl || Placeholder} alt='blog' />
            </div>
            <div className={classes.Body}>
                {blog?.body}
            </div>
            <div className={classes.Tags}>
                {blog?.tags?.map((t, i) => (
                    <Tag text={t} key={i} />
                ))}
            </div>
            <div className={classes.Divider}></div>
            <div className={classes.Actions}>
                <div>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        {!isLiked && <FcLikePlaceholder onClick={likeHandle} />}
                        {isLiked && <FcLike onClick={unLikeHandle} />}
                    </IconContext.Provider>
                    &nbsp;
                    <span>{blog.likers?.length}</span>
                </div>
                <div onClick={() => setCommenting(!commenting)}>
                    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '1.5rem' }}>
                        <FcComments />
                    </IconContext.Provider>
                    &nbsp;
                    <span>{blog.comments?.length}</span>
                </div>
            </div>
            {commentForm}
            <div className={classes.Divider}></div>
            <div className={classes.Comments}>
                <Comments unComment={unComment} comments={comments} />
            </div>
        </div>
    ) : null);
}

export default BlogDetails;