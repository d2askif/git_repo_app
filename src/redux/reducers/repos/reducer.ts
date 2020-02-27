import {types} from '../../actions/types';

export default (state: any = [], action: any) => {
  switch (action.type) {
    case types.GET_REPOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
