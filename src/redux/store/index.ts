import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import {createLogger} from 'redux-logger';

const logger = createLogger();
export const middleWare = [thunk, logger];

export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(
  createStore,
);

export const store = createStoreWithMiddleWare(RootReducer);
