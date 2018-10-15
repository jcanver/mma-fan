import { call, put } from 'redux-saga/effects';

import {
  setEvents,
  getEventsFail
} from 'src/redux/actions/events';

import api from '../../../../utilities/api';

export const getEvents = function* getEvents() {
  try {
    const response = yield call(api.get, 'events');
    yield put(setEvents(response.data));
  } catch (err) {
    yield put(getEventsFail(err));
  }
};

export default getEvents;
