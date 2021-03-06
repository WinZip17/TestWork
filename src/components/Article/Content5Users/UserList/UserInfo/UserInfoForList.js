import React from 'react';
import stl from './UserInfoForList.module.css';
import stlMedia from './UserInfoForListMedia.module.css';
import defUserFoto from '../../../../media/imgs/user-noah-2x.jpg'

const UserInfoForList = (props) => {
    let user404 = "https://frontend-test-assignment-api.abz.agency/images/users/5b977b9f0557c1000.jpeg";
    return (
        <div className={`${stl.user} ${stlMedia.user}`}>
            <div className={`${stl.shell} ${stlMedia.shell}`}>
                <div className={`${stl.avatarShell} ${stlMedia.avatarShell}`}>
                    <img className={`${stl.avatar} ${stlMedia.avatar}`}
                         src={props.user.photo === user404 ? defUserFoto : props.user.photo} alt="user logo"/>
                </div>
                <div className={`${stl.content} ${stlMedia.content}`}>
                    <div className={`${stl.username} ${stlMedia.username}`}>{props.user.name}</div>
                    <div className={`${stl.specialty} ${stlMedia.specialty}`}>{props.user.position}</div>
                    <div className={`${stl.mail} ${stlMedia.mail}`}>{props.user.email}</div>
                    <div className={`${stl.phone} ${stlMedia.phone}`}>{props.user.phone}</div>
                </div>
            </div>
        </div>
    )
};

export default UserInfoForList;

