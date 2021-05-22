import classes from './Blogs.module.css';
import React, { FC } from 'react';
import BlogSummary from './Blog/BlogSummary/BlogSummary';
import { Link } from 'react-router-dom';
import Blog from '../../Models/Blog';

interface Props {
    blogs: Blog[]
}

const Blogs: FC<Props> = ({ blogs }) => {

    return (
        <div className={classes.Blogs}>
            {blogs.map((b, i) => (
                <div key={i} className={classes.Summary}>
                    <BlogSummary 
                        title={b.title}
                        author={b.author!}
                        likes={b.likers?.length!}
                        comments={b.comments?.length!}
                        date={b.createdAt!}
                        image={b.imageUrl!}/>
                    <Link to={`/blog/${b._id}`} className={classes.Link}></Link>
                </div>
            ))}

        </div>
    );
}

export default Blogs;