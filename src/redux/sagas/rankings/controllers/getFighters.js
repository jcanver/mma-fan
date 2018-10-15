import { call, put } from 'redux-saga/effects';

import {
  setFighters,
  getFightersFail
} from 'src/redux/actions/rankings';

import api from '../../../../utilities/api';

export const getFighters = function* getFighters() {
  try {
    const response = yield call(api.get, 'fighters');
    yield put(setFighters(response.data));
  } catch (err) {
    yield put(getFightersFail(err));
  }
};

export default getFighters;
