import {API} from "../API/api";

const SAVE_USERS = 'SAVE_USERS';

let initialState = {
    superUserInfo: {
        email: "",
        id: "",
        name: "",
        phone: "",
        photo: "",
        position: "",
        position_id: "",
        registration_timestamp: 0
    },
    isVisibleMenu: false
};

const UserInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USERS:
            return {...state, superUserInfo: action.data};
        default:
            return state;
    }
};

const saveUsersAC = (data) => ({type: SAVE_USERS, data: data.user});

export const getUsersByIdThunkCreator = (id) => {
    return (dispatch) => {
        API.getUserById(id)
            .then(data => {
                dispatch(saveUsersAC(data));
            });
    };
};


export default UserInfoReducer;