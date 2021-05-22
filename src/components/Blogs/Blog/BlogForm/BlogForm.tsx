import classes from './BlogForm.module.css';
import React, { FC, useState } from 'react';
import OutlineButton, { BtnTone } from '../../../UI/OutilneButton/OutlineButton';
import Blog from '../../../../Models/Blog';
import { useFormik } from 'formik';
import Tag from '../../../Tag/Tag';
import { addBlog } from '../../../../Services/BlogService';

interface Props {
    blog?: Blog,
}

interface Errors {
    title?: string,
    body?: string,
}

const BlogForm: FC<Props> = ({ blog }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [tag, setTag] = useState('');

    const validate = (values: any): Errors => {
        const errors: Errors = {};

        if (!values.title.trim()) {
            errors.title = 'Required';
        }

        if (!values.body.trim()) {
            errors.body = 'Required';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            title: blog ? blog.title : '',
            body: blog ? blog.body : '',
        },
        validate,
        onSubmit: (values) => {
            if (!blog) {
                addBlog(new Blog(values.title, values.body, undefined, tags)).then(res => {
                    console.log(res.data);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    });

    const addTagHandle = () => {
        setTags([...tags, tag]);
        setTag('');
    };

    const removeTagHandle = (i: number) => {
        const newTags = tags.filter((t, index) => index !== i);
        setTags(newTags);
    }; 

    return (
        <form onSubmit={formik.handleSubmit} className={classes.BlogForm}>
            <h1>New Blog</h1>
            <div className={classes.InputGroup}>
                
                <input type='text' placeholder='Title'
                    name='title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    maxLength={200} />
                <small className={classes.Guide}>Remaining {200 - formik.values.title.length}</small>
                {formik.errors.title && formik.touched.title ? <small className={classes.Invaild}>{formik.errors.title}</small> : null}
            </div>
            <div className={classes.InputGroup}>
                <textarea placeholder='Write your blog here...'
                    name='body'
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}></textarea>
                <small className={classes.Guide}>Remaining {20000 - formik.values.body.length}</small>
                {formik.errors.body && formik.touched.body ? <small className={classes.Invaild}>{formik.errors.body}</small> : null}
            </div>
            <div className={classes.TagForm}>
                <h3>Tags: </h3>
                <div className={classes.Tags}>
                    {tags.map((t, i) => (
                        <div key={i} className={classes.Tag} onClick={() => removeTagHandle(i)}>
                            <Tag text={t} />
                        </div>
                    ))}
                </div>
                <div className={classes.InputGroup}>
                    <input 
                        type='text' 
                        maxLength={50}
                        value={tag}
                        onChange={(e) => setTag(e.target.value)} />
                    <div>
                        <OutlineButton 
                            tone={BtnTone.blue} 
                            disabled={tags.length >= 10 || tag.trim() === ''}
                            onClick={addTagHandle} >Add</OutlineButton>
                    </div>
                </div>
            </div>
            <div className={classes.Submit}>
                <OutlineButton tone={BtnTone.light} submit disabled={!formik.dirty || !formik.isValid}>Post</OutlineButton>
            </div>
        </form>
    );
}

export default BlogForm;