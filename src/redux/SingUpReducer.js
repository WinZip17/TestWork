import {API} from "../API/api";

const SET_TOKEN = 'SET_TOKEN';
const SHOW_POSITION = 'SHOW_POSITION';
const UPDATE_PHOTO = 'UPDATE_PHOTO';
const SET_IS_VISIBLE = 'SET_IS_VISIBLE';


let initialState = {
    photo_file_name: "Upload your photo",
    position_id: "",
    position_data: {
        positions: [],
        success: false
    },
    token: "",
    isVisible: false
};

const SingUpUsers = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        case SHOW_POSITION:
            return {...state, position_data: action.positionData};
        case UPDATE_PHOTO:
            return {
                ...state,
                photo_file_name: action.fileName
            };
        case SET_IS_VISIBLE:
            return {...state, isVisible: action.setIsVisible};
        default:
            return state;
    }

};
const showPositionAC = (positionData) => ({type: SHOW_POSITION, positionData: positionData});
const setTokenAC = (token) => ({type: SET_TOKEN, token: token});
export const updatePhotoAC = (fileName) => ({type: UPDATE_PHOTO, fileName: fileName});

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