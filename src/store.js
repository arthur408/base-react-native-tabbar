// Store

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import { reducer as network, createNetworkMiddleware } from 'react-native-offline';

import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const networkMiddleware = createNetworkMiddleware();
const middlewares = [networkMiddleware, sagaMiddleware];

const rootReducer = combineReducers({
  reducer,
  network
});

const store = createStore(
  rootReducer,
  compose(
    applyAppStateListener(),
    applyMiddleware(...middlewares)
  )
);
sagaMiddleware.run(saga);

export default store;