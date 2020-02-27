import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';

export const middleWare = [thunk];

export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(
  createStore,
);

export const store = createStoreWithMiddleWare(RootReducer);
