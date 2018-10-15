import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
// import { getAsyncInjectors } from 'utilities/asyncInjectors';

import rootSaga from './rootSaga';
import rootReducer, { initialState } from './reducers';

const reduxlogger = createLogger({
  stateTransformer: (state) => state,
  collapsed: (getState, action, logEntry) => !logEntry.error
});

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  /** Add saga middleware */
  const middlewares = [
    sagaMiddleware
  ];

  if (__DEV__) {
    middlewares.push(reduxlogger);
  }

  /** composeWithDevTools only runs when process.env.NODE_ENV === 'development' */
  const composeEnhancers = composeWithDevTools({ realtime: true });

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  /** Async reducer registry */
  store.asyncReducers = {};

  // Extensions
  // store.runSaga = (saga) => {
  //   sagaMiddleware.run(saga);
  // };

  sagaMiddleware.run(rootSaga)

  // const { injectSagas } = getAsyncInjectors(store);
  //
  // injectSagas(rootSaga);

  return {
    store
  };
}
