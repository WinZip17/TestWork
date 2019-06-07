import React from 'react';
import stl from './UserInfoForList.module.css';

const UserInfoForList = (props) => {
    return (
        <div className={stl.user}>
            <div className={stl.shell}>
                <div className={stl.avatarShell}>
                    <img className={stl.avatar} src={props.user.photo} alt="user logo"/>
                </div>
                <div className={stl.content}>
                    <div className={stl.username}>{props.user.name}</div>
                    <div className={stl.specialty}>{props.user.position}</div>
                    <div className={stl.mail}>{props.user.email}</div>
                    <div className={stl.phone}>{props.user.phone}</div>
                </div>
            </div>
        </div>
    )
};

export default UserInfoForList;