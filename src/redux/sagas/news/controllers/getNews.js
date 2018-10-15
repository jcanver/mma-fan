import { call, put } from 'redux-saga/effects';

import {
  setNews,
  getNewsFail
} from 'src/redux/actions/news';

import api from '../../../../utilities/api';

export const getNews = function* getNews() {
  try {
    const response = yield call(api.get, 'news');
    yield put(setNews(response.data));
  } catch (err) {
    yield put(getNewsFail(err));
  }
};

export default getNews;
