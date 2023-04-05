import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {name, email, address, id}=friend
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{address.city}</p>
            <button><Link to={`/friendDetails/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default Friend;