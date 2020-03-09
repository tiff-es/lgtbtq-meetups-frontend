import {
    GET_MEETUPS,
    DEFAULT_MAP,
    ADD_MEETUP,
    UPDATE_MEETUP,
    GET_CATEGORIES,
    GET_MEETUP_COORDINATES,
    API_URL
} from "./actionTypes";
import axios from "axios";
const addMeetup = (newMeetup) => {
    return {type: ADD_MEETUP, newMeetup: newMeetup}
}
const getCategories = (categories) => {
    return {type: GET_CATEGORIES, categories: categories}
}
const axiosGetCategories = (categories) => {
return dispatch => {    axios.get(`${API_URL}categories`,{headers:               {  Authorization: window.localStorage.getItem('token')}
})
        .then(response => {
            dispatch(getCategories(response.data))
        })
        .catch(e => console.log(e))
}
}
//if localStorage.JWT does not exist redirect
const getMeetups = (meetups) => {
    return {type: GET_MEETUPS, meetups: meetups}
}
const getMeetupLatLng = (meetup) => {
    return {type: GET_MEETUP_COORDINATES, coordinates: meetup}
}
const getMapDefault = (mapParams) => {
    return{type: DEFAULT_MAP, map: mapParams}
}

const updateMeetup = (updatedMeetup) => {
    return {type: UPDATE_MEETUP, updatedMeetup}
}
const axiosGetMeetups = (meetups) => {
    // console.log('c')
    return dispatch => {
        axios.get(`${API_URL}meetups`,{headers:               {  Authorization: window.localStorage.getItem('token')}
    })
            .then(response => {
                console.log('d')
                dispatch(getMeetups(response.data))

            })
            .catch(e => console.warn(e))
        console.log('hey')
    }
    // console.log('e')
}
export {addMeetup,getMapDefault, getMeetups, updateMeetup, getCategories, axiosGetMeetups, axiosGetCategories, getMeetupLatLng}

