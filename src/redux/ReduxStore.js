import {applyMiddleware, combineReducers, createStore} from "redux";
import UserListReducer from "./UserListReducer";
import SingUpUsers from "./SingUpReducer";
import UserInfoReducer from "./UserInfoReducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

export let reducers = combineReducers({
    userList: UserListReducer,
    userInfo: UserInfoReducer,
    newUser: SingUpUsers,
    form: formReducer
});

let store = createStore(reducers,
    applyMiddleware(thunk));

window.store = store;

export default store;
