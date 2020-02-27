import RepReducer from './repos/reducer';
import {combineReducers} from 'redux';

export default combineReducers({reps: RepReducer});
