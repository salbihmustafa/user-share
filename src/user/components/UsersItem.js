import './UsersItem.css';
import React from 'react';

const UsersItem = (props) => {
    return (
        <div>
            <img src={props.image} alt="Profile Pic"></img>
        </div>
    )
}

export default UsersItem;