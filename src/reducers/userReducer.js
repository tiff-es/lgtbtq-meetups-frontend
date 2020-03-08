import {
    ADD_USER,
    GET_USERS,
    AUTHENTICATION_ERROR,
    LOGIN_AUTHENTICATED,
    AUTHENTICATED,
    SAVE_USER,
    SUCCESS_MESSAGE,
    CLEAR_MESSAGE
} from "../actions/actionTypes";
import uuid from 'uuid';

export default function manageUsers(state = {
    users: [],
    authenticated: false,
    error: '',
    success: '',
    newUser: {
        username: '',
        password: '',
        name: '',
        picture: '',
        bio: '',
        pronouns: ''

    }
}, action){
    switch (action.type) {
        case SAVE_USER:
            return {...state, currentUser: action.user }
        case GET_USERS:
            return {...state, users: action.users}
        case ADD_USER:

            return {...state, users: [...state.users, action.newUser]}

        case AUTHENTICATED:
            return {...state, error: '', authenticated: true}

            case LOGIN_AUTHENTICATED:
            return {
                ...state, success: action.success, error: '', currentUser: action.currentUser.userInfo,  authenticated: true
            }
        case AUTHENTICATION_ERROR:
            return {...state,error: action.error,authenticated: false}
        case SUCCESS_MESSAGE:
            return {...state, success: action.success}
        case CLEAR_MESSAGE:
            return {...state, error: '', success: ''}
        case 'GET_USERS_REQUEST':
            console.log('getting users')
        case 'GET_USERS_SUCCESS':
            return  {...state , users: action.users}
        default:
            return state;
    }
};
