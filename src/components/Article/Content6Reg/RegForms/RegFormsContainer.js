import React from 'react';
import {connect} from "react-redux";
import {
    getPositionThunkCreator, getTokenThunkCreator, resetListAC,
    setIsVisibleAC, updatePhotoAC
} from "../../../../redux/SingUpReducer";
import Successfully from "./SuccessfullyRegistered";
import {getUsersThunkCreator} from "../../../../redux/UserListReducer";
import RegFormsRedux from "./RegForms";
import {API} from "../../../../API/api";
import {reset} from 'redux-form'


//окончание регестрации с высплывающим окном и очисткой стейта от данных пользователя
export const RegistResult = (setIsVisible, resetList, getUsers, accountSaveSuccess, updatePhoto) => {

    // сбросить стейт отображаемых людей на пустой
    resetList();

    // запросить новых людей :)
    getUsers(1);

    //очистить формы
    accountSaveSuccess("infoUser");
    updatePhoto("Upload your photo");
    //показать окошко с поздравлялками :)
    setIsVisible(true);


};


class RegFormsData extends React.Component {

    submit = (formData) => {
        formData.phone = `+380${formData.phone}`;
        API.postUsers(formData, this.props.setIsVisible, this.props.resetList, this.props.getUsers, this.props.newUser.token, this.props.accountSaveSuccess, this.props.updatePhoto);

    };

    componentDidUpdate(event) {
        //отоброжение выбраного файла фотки
        let fileName = this.props.form.infoUser;
        if ("values" in fileName && "photo" in fileName.values && fileName.values.photo[0].name !== this.props.newUser.photo_file_name) this.props.updatePhoto(fileName.values.photo[0].name);
    };


    componentDidMount() {
        this.props.showPosition();
        this.props.getToken();
    };

    render() {
        return <div><RegFormsRedux
            onSubmit={this.submit}
            forms={this.props.form}
            newUser={this.props.newUser}
            showPosition={this.props.showPosition}
            setIsVisible={this.props.setIsVisible}
            resetList={this.props.resetList}
            getUsers={this.props.getUsers}/>
            {this.props.newUser.isVisible && <Successfully isVisible={this.props.setIsVisible}/>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        form: state.form,
        newUser: state.newUser,

    }
};


let mapDispatchToProps = (dispatch) => {
    return {
        getToken: () => {
            dispatch(getTokenThunkCreator());
        },
        showPosition: () => {
            dispatch(getPositionThunkCreator());
        },
        updatePhoto: (fileName) => {
            dispatch(updatePhotoAC(fileName));
        },
        setIsVisible: (setIsVisible) => {
            dispatch(setIsVisibleAC(setIsVisible));
        },
        resetList: () => {
            dispatch(resetListAC());
        },
        getUsers: (page) => {
            dispatch(getUsersThunkCreator(page));
        },
        accountSaveSuccess: (formName) => {
            dispatch(reset(formName))
        }
    }
};

const RegFormsContainer = connect(mapStateToProps, mapDispatchToProps)(RegFormsData);

export default RegFormsContainer;