import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails=useLoaderData()
    // console.log(friendDetails)
    return (
        <div>
            <h1>My friend details</h1>
            <p>Name: {friendDetails.name}</p>
            <p>Phone: {friendDetails.phone}</p>
        </div>
    );
};

export default FriendDetails;