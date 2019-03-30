import {combineReducers} from 'redux';
import AllUsersReducer from './reducer-all-users';
//import AllUsersFilterReducer from './reducer-all-users-filter';
//import AllUsersFilter2Reducer from './reducer-all-users-filter2';
import ActiveUserReducer from './reducer-active-user';
import ReducerUserSearch from './reducer-user-search';
import ReducerUserSearchVal from './reducer-user-search-val';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    allUsers: AllUsersReducer,
//    allUsersFilter: AllUsersFilterReducer,
//    allUsersFilter2: AllUsersFilter2Reducer,
    activeUser: ActiveUserReducer,
    userSearch: ReducerUserSearch,
    userSearchVal: ReducerUserSearchVal
});

export default allReducers;
