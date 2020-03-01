import {types} from '../../actions/types';
import repoReducer from './reducer';
import {Repository} from '../../store/types';

describe('Repo reducer state', () => {
  it('Should return  default state', () => {
    const initialState = {
      repos: [],
      nextPage: '',
      url: 'https://api.github.com/search/repositories?q=stars:>0',
    };
    const newState = repoReducer(undefined, {});
    expect(newState).toEqual(initialState);
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
    const action = {type: types.GET_REPOS, payload: {repos}};

    const newState = repoReducer(undefined, action);

    expect(newState.repos).toEqual(repos);
  });
});
describe('Repo staring', () => {
  let newState: Repository;
  beforeAll(() => {
    const state = {
      nextPage: '',
      url: '',
      repos: [
        {
          id: 1,
          stargazers_count: 1,
          name: '',
          avatar_url: '',
          description: '',
          stared: false,
          forks_count: 0,
          watchers_count: 0,
        },
        {
          id: 2,
          stargazers_count: 2,
          stared: false,
          name: '',
          avatar_url: '',
          description: '',
          forks_count: 0,
          watchers_count: 0,
        },
      ],
    };
    const action = {
      type: types.STAR_REPO,
      payload: 1,
    };
    newState = repoReducer(state, action);
  });
  it('Should increase rep star count  by 1', () => {
    expect(newState.repos[0].stargazers_count).toBe(2);
  });
  it('Should set repo stared true', () => {
    expect(newState.repos[0].stared).toBeTruthy();
  });
});

describe('Repo unstar a repo', () => {
  let newState: Repository;
  beforeAll(() => {
    const state = {
      nextPage: '',
      url: '',
      repos: [
        {
          id: 1,
          stargazers_count: 1,
          name: '',
          avatar_url: '',
          description: '',
          stared: true,
          forks_count: 0,
          watchers_count: 0,
        },
        {
          id: 2,
          stargazers_count: 2,
          stared: false,
          name: '',
          avatar_url: '',
          description: '',
          forks_count: 0,
          watchers_count: 0,
        },
      ],
    };
    const action = {
      type: types.STAR_REPO,
      payload: 1,
    };
    newState = repoReducer(state, action);
  });
  it('Should decrease rep star count  by 1', () => {
    expect(newState.repos[0].stargazers_count).toBe(0);
  });
  it('Should set repo stared false', () => {
    expect(newState.repos[0].stared).toBeFalsy();
  });
});
