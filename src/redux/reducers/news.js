import {
  GET_NEWS,
  SET_NEWS,
  GET_NEWS_FAIL,
  SET_ARTICLE
} from '../constants/news'

export const initialState = {
  fetching: false,
  article: ''
}

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        fetching: true
      }
    case SET_NEWS:
      return {
        ...state,
        fetching: false,
        articles: action.articles
      }
    case GET_NEWS_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    case SET_ARTICLE:
      return {
        ...state,
        article: action.articleId
      }
    default:
      return state
  }
}

export default eventsReducer
