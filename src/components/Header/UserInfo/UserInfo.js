import React from 'react';
import './UserInfo.css'

const UserInfo = (props) =>  {
        return (
            <div className="user">
                <div className="userInfo">
                    <span className="userName">{props.user.name}</span>
                    <span className="userMail">{props.user.email}</span>
                </div>
                <img className="avatar" src={props.user.photo} alt="avatar"/>
                <button className="singOutButton" onClick={() => {props.buttonOut()}} ><img className="singOut" src={require("../../media/icons/sign-out.svg")} alt="singOut"/></button>
            </div>

        );
};


export default UserInfo;