import { takeLatest } from 'redux-saga/effects';
import { GET_EVENTS } from 'src/redux/constants/events';

import getEvents from './controllers/getEvents';

export const getEventsSaga = function* getEventsSaga() {
  yield takeLatest(GET_EVENTS, getEvents);
};

export default getEventsSaga;
