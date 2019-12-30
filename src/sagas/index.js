// Saga

import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';

export default function* saga() {
  yield all([
    fork(networkSaga, { pingInterval: 20000 })
  ]);
}