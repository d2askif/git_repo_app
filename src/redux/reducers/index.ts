import RepReducer from './repos/repoReducer';
import {combineReducers} from 'redux';

export default combineReducers({reps: RepReducer});
