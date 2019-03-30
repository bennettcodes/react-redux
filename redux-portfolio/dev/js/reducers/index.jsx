import {combineReducers} from 'redux';
import AboutReducer from './reducer-about';
import ResumeReducer from './reducer-resume';
import PortfolioReducer from './reducer-portfolio';
import ActivePageReducer from './reducer-active-page';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    about: AboutReducer,
    resume: ResumeReducer,
    portfolio: PortfolioReducer,
    activePage: ActivePageReducer
});

export default allReducers;
