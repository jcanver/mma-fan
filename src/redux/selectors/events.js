import { createSelector } from 'reselect';

const selectEventsDomain = () => state => state.events;

const makeSelectEvents = () => createSelector(
  selectEventsDomain(),
  (substate) => substate.all
);

export default makeSelectEvents;
export {
  selectEventsDomain,
  makeSelectEvents
};
