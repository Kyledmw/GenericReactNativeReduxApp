// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers({ui: (action) => null}),
  compose(applyMiddleware(thunkMiddleware)),
);

export default store;
