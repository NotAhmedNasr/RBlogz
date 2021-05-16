import classes from './Blogs.module.css';
import React from 'react';
import BlogSummary from './Blog/BlogSummary/BlogSummary';
import { Link } from 'react-router-dom';

const Blogs = () => {

    return (
        <div className={classes.Blogs}>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
            <div className={classes.Summary}>
                <BlogSummary />
                <Link to='/' className={classes.Link}></Link>
            </div>
        </div>
    );
}

export default Blogs;