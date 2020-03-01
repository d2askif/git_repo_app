import {types} from '../../actions/types';
import appReducer from './reducer';

describe('appReducer', () => {
  it('Should return default state', () => {
    const initialState = {
      loading: false,
      error: '',
      loadingMore: false,
    };
    const newState = appReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should set loading True', () => {
    const state = {
      loading: false,
      error: '',
      loadingMore: false,
    };
    const action = {
      type: types.APP_LOADING,
      payload: true,
    };
    const newState = appReducer(state, action);
    expect(newState.loading).toBeTruthy();
  });

  it('Should set loading False', () => {
    const state = {
      loading: true,
      error: '',
      loadingMore: false,
    };
    const action = {
      type: types.APP_LOADING,
      payload: false,
    };
    const newState = appReducer(state, action);
    expect(newState.loading).toBeFalsy();
  });

  it('Should set error message', () => {
    const state = {
      loading: true,
      error: '',
      loadingMore: false,
    };
    const action = {
      type: types.APP_ERROR,
      payload: 'app error',
    };
    const newState = appReducer(state, action);
    expect(newState.error).toBe('app error');
  });
});
