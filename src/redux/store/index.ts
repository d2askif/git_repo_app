import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import {createLogger} from 'redux-logger';
import {State} from './types';

const logger = createLogger();
export const middleWare = [thunk, logger];

export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(
  createStore,
);

const initialState: State = {
  repos: [],
  app: {
    loading: false,
    error: '',
  },
};
export const store = createStoreWithMiddleWare(RootReducer, initialState);
