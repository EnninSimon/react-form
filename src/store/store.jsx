import {combineReducers, createStore} from 'redux';
import usersReducer from '../reducers/usersReducer';


export const store = createStore(combineReducers({
    usersState: usersReducer,
}));

