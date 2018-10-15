import { createSelector } from 'reselect';

const selectRankingsDomain = () => state => state.rankings;

const makeSelectAllFighters = () => createSelector(
  selectRankingsDomain(),
  (substate) => substate.allFighters
);

const makeSelectShowModal = () => createSelector(
  selectRankingsDomain(),
  (substate) => substate.showModal
);

const makeSelectFighter = () => createSelector(
  selectRankingsDomain(),
  (substate) => substate.fighter
);

const makeSelectDivision = () => createSelector(
  selectRankingsDomain(),
  (substate) => substate.division
);
const makeSelectTopFifteen = () => createSelector(
  selectRankingsDomain(),
  (substate) => substate.topFifteen
);

export {
  selectRankingsDomain,
  makeSelectAllFighters,
  makeSelectShowModal,
  makeSelectFighter,
  makeSelectDivision,
  makeSelectTopFifteen
};
