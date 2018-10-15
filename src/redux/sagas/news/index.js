import { takeLatest } from 'redux-saga/effects';
import { GET_NEWS } from 'src/redux/constants/news';

import getNews from './controllers/getNews';

export const getNewsSaga = function* getNewsSaga() {
  yield takeLatest(GET_NEWS, getNews);
};

export default getNewsSaga;
