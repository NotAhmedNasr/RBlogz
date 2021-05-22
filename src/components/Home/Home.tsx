import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../Context/UserContext';
import Blog from '../../Models/Blog';
import { getFollowing } from '../../Services/BlogService';
import Blogs from '../Blogs/Blogs';
import Landing from '../Landing/Landing';
import Spinner from '../UI/Spinner/Spinner';


const Home = () => {
    const context = useContext(userContext);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getFollowing().then(res => {
            setLoading(false);
            setBlogs(res.data);
        }).catch(err => {
            setLoading(false);
            console.log(err);
        })
    }, [])

    const blogsRendered = loading ? (
        <div style={{ margin: '200px auto' }}>
            <Spinner size={200} />
        </div>
    ) : (
        <Blogs blogs={blogs} />
    )

    let rendered = context?.user ? blogsRendered : <Landing />;

    return rendered;
}

export default Home;