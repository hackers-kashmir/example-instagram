import actionTypes from "./actionTypes";
import {combineReducers} from "redux";


const initialUser = {
    username: 'owais'
}

function user(state=initialUser, action) {
    if (action.type === actionTypes.SIGNUP_COMPLETE) {
        return {
            username: action.username
        }
    }
    return state;
}


const initialStream = {
    photos: []
};

function stream(state=initialStream, action) {
    if (action.type === actionTypes.FETCH_STREAM) {
        return {
            photos: action.photos
        }
    }

    if (action.type === actionTypes.LIKE) {
        const newState = {
            photos: state.photos
        }
        newState.photos[action.photoId].likes = newState.photos[action.photoId].likes || {};
        newState.photos[action.photoId].likes[action.username] = true;
        console.log('----');
        console.log(newState);
        return newState
    }
    return state;
}

export default combineReducers({stream, user});
