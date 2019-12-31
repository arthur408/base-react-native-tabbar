// Reducer

import { combineReducers } from 'redux';

import firstReducer from './first';

const appReducer = combineReducers({
  first: firstReducer
});

const reducer = (state, action) => {
  return appReducer(state, action);
}

export default reducer;
