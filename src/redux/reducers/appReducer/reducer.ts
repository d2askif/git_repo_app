import {types} from '../../actions/types';
import {App} from '../../store/types';

const initialState = {
  loading: false,
  error: '',
  loadingMore: false,
};
export default (state: App = initialState, action: any) => {
  switch (action.type) {
    case types.APP_LOADING:
      return {...state, loading: action.payload};
    case types.APP_LOADING_MORE:
      return {...state, loadingMore: action.payload};
    case types.APP_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
