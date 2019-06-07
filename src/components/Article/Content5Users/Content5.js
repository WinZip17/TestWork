import React from 'react';
import './Content5.css'
import UserListInfoContainer from "./UserList/UserListInfoContainer";


const Content5 = () => {
    return (
        <div id='users' className="backgroundAlt5">
            <div className="alt5">
                <div className="headers5">
                    <h1> Our cheerful users </h1>
                    <h2> Attention! Sorting users by registration date</h2>
                </div>
                 <UserListInfoContainer />
            </div>
        </div>
    )
};

export default Content5;