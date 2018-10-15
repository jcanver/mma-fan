import { put, select, call, all } from 'redux-saga/effects';
import { makeSelectAllFighters } from 'src/redux/selectors/rankings'

import {
  setTopFifteen
} from 'src/redux/actions/rankings'
import rankings from 'src/screens/Rankings/rankings'

export const makeTopFifteenSaga = function* makeTopFifteenSaga(action) {
  const divisionKey = action.divisionKey
  try {
    const allFighters = yield select(makeSelectAllFighters())

    const getFighterInfo = (fighterName) => allFighters.filter((fighter) => `${fighter.first_name} ${fighter.last_name}` === fighterName)[0]
    const champ = yield call(getFighterInfo, rankings[divisionKey].champ.name)
    const topFifteen = yield all(rankings[divisionKey].rankings.map((fighter) => getFighterInfo(fighter.name)))
    const champArray = [champ]
    const both = champArray.concat(topFifteen)
    yield put(setTopFifteen(both))
  } catch (err) {
    console.log(err)
    // yield put(getFightersFail(err));
  }
}

export default makeTopFifteenSaga
