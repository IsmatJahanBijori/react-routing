import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const friends=useLoaderData()
    return (
        <div className='friends'>
            <h1>My Friends</h1>
            {
                friends.map(friend=> <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;