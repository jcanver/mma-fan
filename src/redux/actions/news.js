import {
  GET_NEWS,
  SET_NEWS,
  GET_NEWS_FAIL,
  SET_ARTICLE
} from 'src/redux/constants/news'

export function setArticle(articleId) {
  return {
    type: SET_ARTICLE,
    articleId
  };
}

export function getNews() {
  return {
    type: GET_NEWS
  };
}

export function setNews(articles) {
  return {
    type: SET_NEWS,
    articles
  };
}

export function getNewsFail(error) {
  return {
    type: GET_NEWS_FAIL,
    error
  };
}
