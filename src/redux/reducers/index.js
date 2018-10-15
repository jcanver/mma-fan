import { combineReducers } from 'redux';

import events from './events';
import news from './news';
import rankings from './rankings';

/** To be combined below */
const reducers = {
  events,
  news,
  rankings
};

const combinedReducers = combineReducers(reducers);

export const initialState = {
  events: undefined,
  news: undefined,
  rankings: undefined
}

export default combinedReducers;
