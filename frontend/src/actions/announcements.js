import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'
import { GET_SETS, DELETE_SET, ADD_SET, SHOW_SET, UPDATE_SET, REPLACE_SET} from './types';

//Choose Block

//GET Sets
export const getAnnouncements = () => (dispatch, getState) => {
  axios.get('/api/announcements/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_SETS,
        payload: res.data,

      
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//ADD Sets
export const addAnnouncement = announcement => (dispatch, getState) => {
  axios
    .post('/api/announcements/', announcement, tokenConfig(getState), {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      dispatch(createMessage({success: "أُضيف الإعلان بنجاح"}))
      dispatch({
        type: ADD_SET,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Update Sets
export const updateAnnouncement = (announcement, id) => (dispatch, getState) => {
  axios
    .put(`/api/announcements/${id}/`, set, tokenConfig(getState), {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      dispatch(createMessage({info: "Set Edited"}))
      dispatch({
        type: UPDATE_SET,
        payload: res.data
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Show details of a single SHOW_SET
export const showAnnouncement = id => (dispatch, getState) => {
  axios.get('/api/announcements/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: SHOW_SET,
        payload: id

      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Delete Sets
export const deleteAnnouncement = (id) => (dispatch, getState) => {
  axios
   .delete(`/api/announcements/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({danger: "حُذف الإعلان"}))
      dispatch({
        type: DELETE_SET,
        payload: id
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

