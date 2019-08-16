import React from 'react';
import './UserListInfo.css'
import './UserListInfoMedia.css'
import UserInfoForList from "./UserInfo/UserInfoForList";

const UserListInfo = (props) => {

    return <div className="UserListContainer">
        {props.userList.lastPage ? <div className="usersList">
            {props.userList.userElementsList.users.map((users) => <UserInfoForList
                key={users.id} user={users}/>)}
        </div> : <div/>}

        {props.userList.total_pages === props.userList.lastPage
            ? <div></div>
            : <div className="alt5Button">
                <button onClick={() => {
                    props.showMoreUsers(props.userList.lastPage)
                }} className="buttonSecondary">Show more
                </button>
            </div>}
    </div>
};


export default UserListInfo;