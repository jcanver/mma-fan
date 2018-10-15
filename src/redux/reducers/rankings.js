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
} from '../constants/rankings'

export const initialState = {
  fetching: false,
  showModal: false,
  fighter: '',
  allFighters: null,
  division: null,
  topFifteen: []
}

function rankingsReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        showModal: true
      }
    case CLOSE:
      return {
        ...state,
        showModal: false
      }
    case SET_FIGHTER:
      return {
        ...state,
        fighter: action.fighterId
      }
    case GET_FIGHTERS:
      return {
        ...state,
        fetching: true
      }
    case SET_FIGHTERS:
      return {
        ...state,
        fetching: false,
        allFighters: action.fighters
      }
    case GET_FIGHTERS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case SET_DIVISION:
      return {
        ...state,
        division: action.division
      }
    case MAKE_TOP_FIFTEEN:
      return state
    case SET_TOP_FIFTEEN:
      return {
        ...state,
        topFifteen: action.fighters
      }
    default:
      return state
  }
}

export default rankingsReducer
