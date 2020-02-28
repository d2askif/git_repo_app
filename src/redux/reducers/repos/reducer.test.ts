import {types} from '../../actions/types';
import repoReducer from './reducer';
import {Repo} from '../../store/types';

describe('Repo reducer state', () => {
  it('Should return  default state', () => {
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
describe('Repo staring', () => {
  let newState: Array<Repo>;
  beforeAll(() => {
    const state = [
      {
        id: 1,
        stargazers_count: 1,
        stared: false,
      },
      {
        id: 2,
        stargazers_count: 2,
        stared: false,
      },
    ];
    const action = {
      type: types.STAR_REPO,
      payload: 1,
    };
    newState = repoReducer(state, action);
  });
  it('Should increase rep star count  by 1', () => {
    expect(newState[0].stargazers_count).toBe(2);
  });
  it('Should set repo stared true', () => {
    expect(newState[0].stared).toBeTruthy();
  });
});

describe('Repo unstar a repo', () => {
  let newState: Array<Repo>;
  beforeAll(() => {
    const state = [
      {
        id: 1,
        stargazers_count: 1,
        stared: true,
      },
      {
        id: 2,
        stargazers_count: 2,
        stared: false,
      },
    ];
    const action = {
      type: types.STAR_REPO,
      payload: 1,
    };
    newState = repoReducer(state, action);
  });
  it('Should decrease rep star count  by 1', () => {
    expect(newState[0].stargazers_count).toBe(0);
  });
  it('Should set repo stared false', () => {
    expect(newState[0].stared).toBeFalsy();
  });
});
