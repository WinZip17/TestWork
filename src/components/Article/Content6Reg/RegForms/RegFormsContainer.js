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



//окончание регестрации с высплывающим окном и очисткой стейта от данных пользователя
export const RegistResult = (data, setIsVisible, resetList, getUsers) => {

    // сбросить стейт отображаемых людей на пустой
    resetList();

    // // запросить новых людей :)
    getUsers(1);

    //показать окошко с поздравлялками :)
    setIsVisible(true);
};


class RegFormsData extends React.Component {

    submit = (formData) => {
        debugger
        formData.phone = `+380${formData.phone}`;
        console.log(formData);
        API.postUsers(formData, this.props.setIsVisible, this.props.resetList, this.props.getUsers, this.props.state.newUser.token);

    };

    componentDidUpdate(event) {
        //отоброжение выбраного файла фотки
        let fileName = this.props.state.form.infoUser;
        if ("values" in fileName && "photo" in fileName.values && fileName.values.photo[0].name != this.props.state.newUser.photo_file_name) this.props.updatePhoto(fileName.values.photo[0].name);
    };


    componentDidMount() {
        this.props.showPosition();
        this.props.getToken();
    };

    render() {
        return <div><RegFormsRedux
            onSubmit={this.submit}
            forms={this.props.state.form}
            newUser={this.props.state.newUser}
            showPosition={this.props.showPosition}
            // updatePhoto={this.props.updatePhoto}
            setIsVisible={this.props.setIsVisible}
            resetList={this.props.resetList}
            getUsers={this.props.getUsers}/>
            {this.props.state.newUser.isVisible && <Successfully isVisible={this.props.setIsVisible}/>}
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
        showPosition: () => {
            dispatch(getPositionThunkCreator());
        },
        updatePhoto: (fileName) => {
            debugger
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
        }
    }
};

const RegFormsContainer = connect(mapStateToProps, mapDispatchToProps)(RegFormsData);

export default RegFormsContainer;