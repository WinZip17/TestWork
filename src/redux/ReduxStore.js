import {combineReducers, createStore} from "redux";
import UserListReducer from "./UserListReducer";
import SingUpUsers from "./SingUpReducer";
import UserInfoReducer from "./UserInfoReducer";

export let reducers = combineReducers ({
    userList: UserListReducer,
    userInfo: UserInfoReducer,
    newUser: SingUpUsers
});

let store = createStore(reducers);

window.store = store;

export default store;
