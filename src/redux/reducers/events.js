import {
  GET_EVENTS,
  SET_EVENTS,
  GET_EVENTS_FAIL
} from '../constants/events'

export const initialState = {
  fetching: false
}

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        fetching: true
      }
    case SET_EVENTS:
      return {
        ...state,
        fetching: false,
        all: action.events
      }
    case GET_EVENTS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}

export default eventsReducer
