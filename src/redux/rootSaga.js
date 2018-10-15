
import { fork, all } from 'redux-saga/effects'

import eventsSagas from './sagas/events'
import newsSagas from './sagas/news'
import rankingsSagas from './sagas/rankings'

const rootSaga = function* rootSaga() {
  yield all([
    fork(eventsSagas),
    fork(newsSagas),
    fork(rankingsSagas)
  ])
}

export default rootSaga
