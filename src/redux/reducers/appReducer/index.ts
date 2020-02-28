import {types} from '../../actions/types';
export default (state: any = {}, action: any) => {
  switch (action.type) {
    case types.APP_LOADING:
      return {...state, loading: action.payload};
    case types.APP_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
