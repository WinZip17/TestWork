import React from 'react';
import './UserInfo.css';
import './UserInfoMedia.css';
import {connect} from "react-redux";
import UserInfo from "./UserInfo";
import {getUsersByIdThunkCreator} from "../../../redux/UserInfoReducer";


class UserListData extends React.Component {

    componentDidMount() {
        this.props.getUsersById(1);
    };

    render() {
        return this.props.superUserInfo.position_id ?
            <UserInfo user={this.props.superUserInfo} buttonOut={this.props.buttonOut}/> : <div></div>

    };
};

let mapStateToProps = (state) => {
    return {
        superUserInfo: state.userInfo.superUserInfo
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        getUsersById: (id) => {
            dispatch(getUsersByIdThunkCreator(id));
        },
        buttonOut: () => {
            alert('Сорри, выхода нет :(')
        }
    };
};

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserListData);
export default UserInfoContainer;

