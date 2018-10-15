import { all, takeLatest } from 'redux-saga/effects';
import { GET_FIGHTERS, MAKE_TOP_FIFTEEN } from 'src/redux/constants/rankings';

import getFighters from './controllers/getFighters';
import makeTopFifteen from './controllers/makeTopFifteen';

export const rankingsSaga = function* rankingsSaga() {
  yield all([
    takeLatest(GET_FIGHTERS, getFighters),
    takeLatest(MAKE_TOP_FIFTEEN, makeTopFifteen)
  ]);
};

export default rankingsSaga;
