import React from 'react';
import './UserListInfo.css';
import UserListInfo from "./UserListInfo";
import {connect} from "react-redux";
import {
    getUsersThunkCreator, showUsersThunkCreator
} from "../../../../redux/UserListReducer";


export class UserListData extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(1);
    };

    render() {
        return <UserListInfo userList={this.props.userList} showMoreUsers={this.props.showMoreUsers}/>
    };
};

let mapStateToProps = (state) => {
    return {
        userList : state.userList
    };
};

let mapDispatchToProps = (dispatch) => {

    return {
        getUsersThunk: (data) => {
            dispatch(getUsersThunkCreator(data));
        },
        showMoreUsers: (page) => {
            dispatch(showUsersThunkCreator(page))
        },
    };
};

const UserListInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserListData);

export default UserListInfoContainer;