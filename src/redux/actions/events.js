import {
  GET_EVENTS,
  SET_EVENTS,
  GET_EVENTS_FAIL
} from 'src/redux/constants/events'

export function getEvents() {
  return {
    type: GET_EVENTS
  };
}

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    events
  };
}

export function getEventsFail(error) {
  return {
    type: GET_EVENTS_FAIL,
    error
  };
}
