import { GET_ANNOUNCEMENTS, DELETE_ANNOUNCEMENT, ADD_ANNOUNCEMENT, SHOW_ANNOUNCEMENT, UPDATE_ANNOUNCEMENT, REPLACE_ANNOUNCEMENT } from '../actions/types.js'

const initialState = {
  announcements: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload,
      }
      case DELETE_ANNOUNCEMENT:
        return {
          ...state,
          announcements: state.announcements.filter((announcement) => announcement.id !== action.payload),
        };

      case UPDATE_ANNOUNCEMENT:
        console.log(action.payload, "payloaad");
        return {
          ...state,
          announcements: state.announcements.map(announcement => {
            if (announcement.id !== action.payload.id) {
              return announcement;
            } else {
              return { ...announcement, title: action.payload.title, description: action.payload.description, images: action.payload.images };
            }
          })
        };


      case ADD_ANNOUNCEMENT:
        return {
          ...state,
          announcements: [...state.announcements, action.payload]
        };
      default:
        return state;
  }
}
