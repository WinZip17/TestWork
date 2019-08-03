import {API} from "../API/api";

const SET_TOKEN = 'SET_TOKEN';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PHONE = 'UPDATE_PHONE';
const UPDATE_POSITION = 'UPDATE_POSITION';
const SHOW_POSITION = 'SHOW_POSITION';
const UPDATE_PHOTO = 'UPDATE_PHOTO';
const CLEAR_INFO_USER = 'CLEAR_INFO_USER';
const SET_IS_VISIBLE = 'SET_IS_VISIBLE';

let initialState = {
    email: "",
    name: "",
    phone_start: "+380",
    phone_update: "",
    phone: "",
    photo: [],
    photo_file_name: "Upload your photo",
    position_id: "",
    position_data: {
        positions: [],
        success: false
    },
    validations: {
        formErrors: {
            email: "email is not correct",
            name: "Your name is not correct ",
            phone: "phone number is not correct",
            photo: "photo does not meet the requirements",
            position_id: ""
        },
        emailValid: true,
        nameValid: true,
        phoneValid: true,
        photoValid: true,
        positionValid: true
    },
    token: "",
    isVisible: false
};

const SingUpUsers = (state = initialState, action) => {

    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        case UPDATE_NAME:
            return {...state, name: action.name, ...state.validations.nameValid = action.nameValid};
        case UPDATE_EMAIL:
            return {...state, email: action.email, ...state.validations.emailValid = action.emailValid};
        case UPDATE_PHONE:
            return {...state, phone: action.phone, ...state.validations.phoneValid = action.phoneValid};
        case UPDATE_POSITION:
            return {...state, position_id: action.position_id};
        case SHOW_POSITION:
            return {...state, position_data: action.positionData};
        case UPDATE_PHOTO:
            return {
                ...state,
                photo_file_name: action.fileName
            };
        case CLEAR_INFO_USER:
            return {...initialState};
        case SET_IS_VISIBLE:
            return {...state, isVisible: action.setIsVisible};
        default:
            return state;
    }

};
const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});
export const updateNameAC = (name, nameValid) => ({type: UPDATE_NAME, name: name, nameValid: nameValid});
export const updateEmailAC = (email, emailValid) => ({type: UPDATE_EMAIL, email: email, emailValid: emailValid});
export const updatePhoneAC = (phone, phoneValid) => ({type: UPDATE_PHONE, phone: phone, phoneValid: phoneValid});
export const updatePositionAC = (position_id) => ({type: UPDATE_POSITION, position_id: position_id});
// export const updatePhotoAC = (photo, fileName, photoValid) => ({
//     type: UPDATE_PHOTO,
//     photo: photo,
//     fileName: fileName,
//     photoValid: photoValid
// });
export const updatePhotoAC = (fileName) => ({
    type: UPDATE_PHOTO,
    fileName: fileName
});
export const clearInfiUserAC = () => ({type: CLEAR_INFO_USER});
export const setIsVisibleAC = (setIsVisible) => ({type: SET_IS_VISIBLE, setIsVisible: setIsVisible});


//экшены на сброс показаных пользователей и отоброжение новых, работают с UserInfoReducer!!!!!
export const resetListAC = () => ({type: "RESET_USER_LIST"});


export const getTokenThunkCreator = () => {
    return (dispatch) => {
        API.getToken()
            .then(data => {
                dispatch(setTokenAC(data));
            })
    }
};

export const getPositionThunkCreator = () => {
    return (dispatch) => {
        API.getPositions()
            .then(data => {
                dispatch(showPositionAC(data));
            });
    }
};


export default SingUpUsers;