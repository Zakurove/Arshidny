import { GET_SETS, DELETE_SET, ADD_SET, SHOW_SET, UPDATE_SET, REPLACE_SET } from '../actions/types.js'

const initialState = {
  announcements: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SETS:
      return {
        ...state,
        announcements: action.payload,
        //  &&
      }
      case DELETE_SET:
        return {
          ...state,
          announcements: state.announcements.filter((announcement) => announcement.id !== action.payload),
        };

      case UPDATE_SET:
        console.log(action.payload, "payloaad");
        return {
          ...state,
          announcements: state.announcements.map(announcement => {
            if (announcement.id !== action.payload.id) {
              return announcement;
            } else {
              return { ...announcement, title: action.payload.title, images: action.payload.images };
            }
          })
        };


      case ADD_SET:
        return {
          ...state,
          announcement: [...state.announcement, action.payload]
        };
      default:
        return state;
  }
}
