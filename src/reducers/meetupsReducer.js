import Time from 'redux-time'
import {ADD_MEETUP, DEFAULT_MAP, UPDATE_MEETUP, GET_MEETUPS, GET_CATEGORIES, GET_MEETUP_COORDINATES} from "../actions/actionTypes";
export default function manageMeetups(state = {
    meetups: [],
    newMeetup: {
        location: '',
        lat: null,
        lon: null,
        time: '',
        date: '',
        info: '',
        category: '',
        name: ''
    },
    categories: [],
    map: {
        width: '50vh',
        height:'40vw',
        location: 'Default @@INIT',
        lat:  38.900497,
        lon: -77.007507,
        zoom: [12]
    },
    coordinates: {
     //meetup coordinates for map marker
        location: '',
        lat:  null ,
        lon: null ,
    }
}, action){
    switch (action.type) {
        // these are the default coordinates
        case DEFAULT_MAP:
            return {...state, map: {
                width: '50vw',
                    height: '40vh',
                    location: 'DEFAULT_MAP COMPLETE',
                    lat: 38.900497,
                    lon: -77.007507,
                    // zoom: [5]
                }}

        //meetup coordinates for map marker
        case GET_MEETUP_COORDINATES:
            return {...state,
                coordinates: {
                location:  action.location,
                    lat: action.lat,
                    lon: action.lon
                }
            }
        case GET_MEETUPS:
            return {...state, meetups: action.meetups}

        case ADD_MEETUP:
            return {
                ...state,
                meetups: [...state.meetups, action.newMeetup]
            }
        case UPDATE_MEETUP:
            return state.meetups.map((meetup, index )=> {
                if(index !== action.index){
            return meetup
        }
                return{
                    ...meetup,
                    ...action.meetups
                }
            })
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.categories
            }
        default:
            return state

    }
}

// return array.map((item, index) => {
//     if (index !== action.index) {
//
//         return item
//     }
//
//     return {
//         ...item,
//         ...action.item
//     }
// })
// }
// #Immutable Update Utility Libraries
// Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. For example, Immer makes immutable updates a simple function and plain JavaScript objects:
//
//     var usersState = [{ name: 'John Doe', address: { city: 'London' } }]
// var newState = immer.produce(usersState, draftState => {
//     draftState[0].name = 'Jon Doe'
//     draftState[0].address.city = 'Paris'
//
// })
// //
// }, action){
//     switch (action.type) {
//         case GET_USERS:
//             return {...state, users: action.users}
//         case ADD_USER:
//             return {...state, users: [...state.users,action.newUser]}
//         case LOGIN:
//             return {
//                 ...state, currentUser: action.currentUser
//             }
//         case 'GET_USERS_REQUEST':
//             console.log('getting users')
//         case 'GET_USERS_SUCCESS':
//             return  {...state , users: action.users}
//         default:
//             return state;
//     }
// };
