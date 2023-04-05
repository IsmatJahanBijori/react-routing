import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData()
    // console.log(post)
    return (
        <div>
            <h2>Hello Post Details</h2>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;