const SAVE_USERS = 'SAVE_USERS';

let initialState =   {
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

export const   saveUsersAC = (data) => (  {type: SAVE_USERS, data: data } );

export default UserInfoReducer;