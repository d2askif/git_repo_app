import {types} from '../../actions/types';
import repoReducer from './reducer';

describe('Repo reducer', () => {
  it('Should return return default state', () => {
    const newState = repoReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if received action type', () => {
    const repos = [
      {
        author: 'author 1',
      },
      {
        author: 'author 2',
      },
      {
        author: 'author 3',
      },
    ];
    const action = {type: types.GET_REPOS, payload: repos};

    const newState = repoReducer(undefined, action);

    expect(newState).toEqual(repos);
  });

  it('Should append to the state', () => {
    const initState = [
      {
        author: 'author 1',
      },
    ];

    const repos = [
      {
        author: 'author 2',
      },
      {
        author: 'author 3',
      },
    ];
    const action = {type: types.GET_REPOS, payload: repos};

    const newState = repoReducer(initState, action);

    expect(newState).toEqual([...initState, ...repos]);
  });
});
