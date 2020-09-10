import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'
import { GET_ANNOUNCEMENTS, DELETE_ANNOUNCEMENT, ADD_ANNOUNCEMENT, SHOW_ANNOUNCEMENT, UPDATE_ANNOUNCEMENT, REPLACE_ANNOUNCEMENT} from './types';

//Choose Block

//GET Announcements
export const getAnnouncements =  (dispatch, getState) => {
  axios.get('/api/announcements/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ANNOUNCEMENTS,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//ADD Announcements
export const addAnnouncement = announcement => (dispatch, getState) => {
  axios
    .post('/api/announcements/', announcement, tokenConfig(getState), {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      dispatch(createMessage({success: "Announcement Added Successfully"}))
      dispatch({
        type: ADD_ANNOUNCEMENT,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Update Announcements
export const updateAnnouncement = (announcement, id) => (dispatch, getState) => {
  axios
    .put(`/api/announcements/${id}/`, announcement, tokenConfig(getState), {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      dispatch(createMessage({info: "Announcement Edited"}))
      dispatch({
        type: UPDATE_ANNOUNCEMENT,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Show details of a single SHOW_ANNOUNCEMENT
export const showAnnouncement = id => (dispatch, getState) => {
  axios.get('/api/announcements/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: SHOW_ANNOUNCEMENT,
        payload: id

      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Delete Announcements
export const deleteAnnouncement = (id) => (dispatch, getState) => {
  axios
   .delete(`/api/announcements/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({danger: "Announcement Deleted"}))
      dispatch({
        type: DELETE_ANNOUNCEMENT,
        payload: id
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


