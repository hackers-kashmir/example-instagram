import Firebase from "firebase";
import actionTypes from "./actionTypes";

const firebase = new Firebase("https://vivid-heat-5488.firebaseio.com/");
window.firebase = firebase;

// Action Creator
function like(photoId, username) {
    return function(dispatch) {
        firebase.child(`photos/${photoId}/likes/${username}`).set(true, () => {
            dispatch({
                type: actionTypes.LIKE,
                photoId: photoId,
                username: username
            });
        })
    }

}


function signup(username) {
    return function(dispatch) {
        firebase.child(`users/${username}`).set(true, () => {
            dispatch({
                type: actionTypes.SIGNUP_COMPLETE,
                username: username
            });
        });
    }
}


function fetchStream() {
    return function(dispatch) {
        firebase.child('photos').once('value', snapshot => {
            console.log('firebase returned')
            dispatch({
                type: actionTypes.FETCH_STREAM,
                photos: snapshot.val()
            });
        }) 
    }
}


export default {like, signup, fetchStream};
