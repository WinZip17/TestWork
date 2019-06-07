import React from 'react';
import './UserListInfo.css'
import UserListInfo from "./UserListInfo";
import {connect} from "react-redux";
import {addElementsUserListAC, showMoreUsersAC, showUsersAC} from "../../../../redux/UserListReducer";
import {API} from "../../../../API/api";

export class UserListData extends React.Component {

    componentDidMount() {
        API.getUsers(1)
            .then(data => {
                this.props.showUsers(data);
                this.props.addElementsUserList(data);
            })
    }

    render() {
        return <UserListInfo userList={this.props.state.userList} showMoreUsers={this.props.showMoreUsers}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        showUsers: (data) => {
            dispatch(showUsersAC(data));
        },
        showMoreUsers: (page) => {
            API.getUsers(page)
                .then(data => {
                    return dispatch(showMoreUsersAC(page, data));
                })
        },
        addElementsUserList: (serverData) => {
            dispatch(addElementsUserListAC(serverData));
        },
    }
};

const UserListInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserListData);

export default UserListInfoContainer;