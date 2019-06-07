import React from 'react';
import './UserInfo.css'
import {connect} from "react-redux";
import UserInfo from "./UserInfo";
import {saveUsersAC} from "../../../redux/UserInfoReducer";
import {API} from "../../../API/api";

class UserListData extends React.Component {

    componentDidMount() {

        API.getUserById(1)
            .then(data => {
                this.props.saveUsers(data);
            });
    }

    render() {
        return <UserInfo user={this.props.state.userInfo.superUserInfo} buttonOut={this.props.buttonOut}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        saveUsers: (data) => {
            dispatch(saveUsersAC(data.user));
        },
        buttonOut: () => {
            alert('Сорри, выхода нет :(')
        }
    }
};

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserListData);
export default UserInfoContainer;

