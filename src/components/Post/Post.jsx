import React from 'react';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {userId, title,id}=post
    return (
        <div>
            <h3>{userId}: {title}</h3>
            <button><Link to={`/postDetails/${id}`}>Show Post Details</Link></button>
            
        </div>
    );
};

export default Post;