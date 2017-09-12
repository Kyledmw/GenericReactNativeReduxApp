// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({}),
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;
