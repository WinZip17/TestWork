import {applyMiddleware, combineReducers, createStore} from "redux";
import UserListReducer from "./UserListReducer";
import SingUpUsers from "./SingUpReducer";
import UserInfoReducer from "./UserInfoReducer";
import thunk from 'redux-thunk';

export let reducers = combineReducers({
    userList: UserListReducer,
    userInfo: UserInfoReducer,
    newUser: SingUpUsers
});

let store = createStore(reducers,
    applyMiddleware(thunk));

export default store;
