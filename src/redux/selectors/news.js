import { createSelector } from 'reselect';

const selectNewsDomain = () => state => state.news;

const makeSelectNews = () => createSelector(
  selectNewsDomain(),
  (substate) => substate.articles
);

const makeSelectArticle = () => createSelector(
  selectNewsDomain(),
  substate => substate.article
)

export {
  selectNewsDomain,
  makeSelectNews,
  makeSelectArticle
};
