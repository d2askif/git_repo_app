import RepReducer from './repos/reducer';
import AppReducer from './appReducer/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  app: AppReducer,
  repos: RepReducer,
});
