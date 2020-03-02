import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../redux/reducers/';
import {middleWare} from '../redux/store/';
import {State, initialState} from '../redux/store/types';

export const testStore = (initState: State = initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
  return createStoreWithMiddleware(rootReducer, initState);
};
