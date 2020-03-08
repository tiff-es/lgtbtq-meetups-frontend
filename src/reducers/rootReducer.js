
import { combineReducers } from 'redux'
import manageUsers from './userReducer'
import manageMeetups from './meetupsReducer'

const rootReducer = combineReducers({
    users: manageUsers,
    meetups: manageMeetups
});

export default rootReducer;