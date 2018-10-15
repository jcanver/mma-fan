import {
  GET_FIGHTERS,
  SET_FIGHTERS,
  GET_FIGHTERS_FAIL,
  OPEN,
  CLOSE,
  SET_DIVISION,
  MAKE_TOP_FIFTEEN,
  SET_TOP_FIFTEEN,
  SET_FIGHTER
} from 'src/redux/constants/rankings'

export function toggleModal(show) {
  return {
    type: show ? OPEN : CLOSE
  }
}

export function setFighter(fighterId) {
  return {
    type: SET_FIGHTER,
    fighterId
  }
}

export function getFighters() {
  return {
    type: GET_FIGHTERS
  };
}

export function setFighters(fighters) {
  return {
    type: SET_FIGHTERS,
    fighters
  };
}

export function getFightersFail(error) {
  return {
    type: GET_FIGHTERS_FAIL,
    error
  };
}

export function setDivision(division) {
  return {
    type: SET_DIVISION,
    division
  }
}

export function makeTopFifteen(divisionKey) {
  return {
    type: MAKE_TOP_FIFTEEN,
    divisionKey
  }
}

export function setTopFifteen(fighters) {
  return {
    type: SET_TOP_FIFTEEN,
    fighters
  }
}
