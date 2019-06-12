import React from 'react';
import {connect} from "react-redux";
import RegForms from "./RegForms";
import {
    clearInfiUserAC, getPositionThunkCreator, getTokenThunkCreator, resetListAC,
    setIsVisibleAC, updateEmailAC, updateNameAC,
    updatePhoneAC, updatePhotoAC, updatePositionAC
} from "../../../../redux/SingUpReducer";
import Successfully from "./SuccessfullyRegistered";
import {getUsersThunkCreator} from "../../../../redux/UserListReducer";


// Проверка на валидность информации для активации кнопки
export const regUsersValidation = (props) => {
    let valid = props.newUser.validations.nameValid && props.newUser.validations.emailValid && props.newUser.validations.phoneValid && props.newUser.validations.photoValid;
    let dataUser = props.newUser.name.length > 1 && props.newUser.email.length > 1 && props.newUser.phone.length > 9 && props.newUser.position_id.length && props.newUser.photo_file_name !== "Upload your photo";
    let result = valid && dataUser ? true : false;
    return result;
};


//окончание регестрации с высплывающим окном и очисткой стейта от данных пользователя
export const RegistResult = (data, setIsVisible, clearInfoUser, resetList, getUsers) => {

    // сбросить стейт отображаемых людей на пустой
    resetList();

    // // запросить новых людей :)
    getUsers(1);

    //очистить стейт от введенных ранее данных
    clearInfoUser();

    //показать окошко с поздравлялками :)
    setIsVisible(true);
};


class RegFormsData extends React.Component {

    componentDidMount() {
        this.props.showPosition();
        this.props.getToken();
    }

    render() {
        return <div><RegForms
            newUser={this.props.state.newUser}
            updateName={this.props.updateName}
            updateEmail={this.props.updateEmail}
            updatePhone={this.props.updatePhone}
            showPosition={this.props.showPosition}
            updatePosition={this.props.updatePosition}
            updatePhoto={this.props.updatePhoto}
            setIsVisible={this.props.setIsVisible}
            clearInfoUser={this.props.clearInfoUser}
            resetList={this.props.resetList}
            getUsers={this.props.getUsers}/>
            {this.props.state.newUser.isVisible ? <Successfully isVisible={this.props.setIsVisible}/> : <div/>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
};


//перед диспатчем валидация
let mapDispatchToProps = (dispatch) => {
    return {
        getToken: () => {
            dispatch(getTokenThunkCreator());
        },
        updateName: (e) => {
            let nameValid = (e.target.value.length >= 2 && e.target.value.length < 60);
            dispatch(updateNameAC(e.target.value, nameValid));
        },
        updateEmail: (e) => {
            let emailValid = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(e.target.value);
            dispatch(updateEmailAC(e.target.value, emailValid));
        },
        updatePhone: (e) => {
            let newValue = e.target.value.replace(/[" ", "(", ")","_"]/g, "");
            let phoneValid = newValue.length === 13 ? true : false;
            dispatch(updatePhoneAC(newValue, phoneValid));
        },
        showPosition: () => {
            dispatch(getPositionThunkCreator());
        },
        updatePosition: (e) => {
            dispatch(updatePositionAC(e.target.value));
        },
        updatePhoto: (e) => {
            let fileName = e.target.value.split('\\').pop();
            let photoValid = e.target.files[0].size > 5120000 ? false : true;
            dispatch(updatePhotoAC(e.target.files[0], fileName, photoValid));
        },
        setIsVisible: (setIsVisible) => {
            dispatch(setIsVisibleAC(setIsVisible));
        },
        clearInfoUser: () => {
            dispatch(clearInfiUserAC());
        },
        resetList: () => {
            dispatch(resetListAC());
        },
        getUsers: (page) => {
            dispatch(getUsersThunkCreator(page));
        }
    }
};

const RegFormsContainer = connect(mapStateToProps, mapDispatchToProps)(RegFormsData);

export default RegFormsContainer;