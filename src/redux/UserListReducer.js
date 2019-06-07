import React from 'react';

const SHOW_USERS = 'SHOW_USERS';
const SHOW_MORE = 'SHOW_MORE';
const ADD_ELEMENTS_USER_LIST = 'ADD_ELEMENTS_USER_LIST';
const RESET_USER_LIST = 'RESET_USER_LIST';

let initialState =   {
    serverData: {
        count: 0,
        links: {
            next_url: null,
            prev_url: null
        },
        page: 0,
        success: false,
        total_pages: 1,
        total_users: 1,
        users: [
            {
                email: "",
                id: "",
                name: "",
                phone: "",
                photo: "",
                position: "",
                position_id: "",
                registration_timestamp: 0
            }
        ]
    },
    lastPage: 0,
    total_pages: 0,
    userElementsList: {
        count: 0,
        links: {
            next_url: null,
            prev_url: null
        },
        page: 0,
        success: false,
        total_pages: 1,
        total_users: 1,
        users: [

            {
                email: "",
                id: "",
                name: "",
                phone: "",
                photo: "",
                position: "",
                position_id: "",
                registration_timestamp: 0
            }
        ]
    }
};

const UserListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return {...state, serverData: action.data, total_pages: action.data.total_pages};
        case RESET_USER_LIST:
            return {...state = initialState};
        case ADD_ELEMENTS_USER_LIST:
            return {...state, userElementsList: action.serverData, lastPage: action.serverData.page};
        case SHOW_MORE:
            return  {...state, ...state.userElementsList.users = [...state.userElementsList.users, ...action.data.users], ...state.lastPage = action.page+1};
        default:
            return state;
    }
};

export const   showUsersAC = (data) => (  {type: SHOW_USERS, data: data } );
export const   addElementsUserListAC = (serverData) => (  {type: ADD_ELEMENTS_USER_LIST, serverData: serverData } );
export const   showMoreUsersAC = (page, data) => ( {type: SHOW_MORE, page: page, data: data} );
export const   resetUserListAC = () => ( {type: RESET_USER_LIST} );

export default UserListReducer;