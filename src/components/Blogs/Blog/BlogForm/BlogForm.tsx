import classes from './BlogForm.module.css';
import React, { useState } from 'react';
import OutlineButton, { BtnTone } from '../../../UI/OutilneButton/OutlineButton';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div className={classes.BlogForm}>
            <h1>New Blog</h1>
            <div className={classes.InputGroup}>
                <input type='text' placeholder='Title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} />
                <small className={classes.Guide}>maximum 50</small>
                <small className={classes.Invaild}>Invalid Input</small>
            </div>
            <div className={classes.InputGroup}>
                <textarea placeholder='Write your blog here...'
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <small className={classes.Guide}>maximum 5000</small>
                <small className={classes.Invaild}>Invalid Input</small>
            </div>
            <div className={classes.Submit}>
                <OutlineButton tone={BtnTone.light}>Post</OutlineButton>
            </div>
        </div>
    );
}

export default BlogForm;