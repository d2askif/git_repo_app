import moxios from 'moxios';
import {testStore} from '../utils/testHelpers';
import {fetchRepos, loadMore} from '../redux/actions';
import {State, initialState} from '../redux/store/types';

describe('fetchPosts action', () => {
  const response = [
    {
      id: 1,
      stargazers_count: 1,
      name: '',
      owner: {avatar_url: ''},
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
      owner: {avatar_url: ''},
      description: '',
      forks_count: 0,
      watchers_count: 0,
    },
  ];
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Store loads initial Repos correctly', () => {
    const expectedState = [
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
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          items: response,
        },
        headers: {
          link: '',
        },
      });
    });
    return store
      .dispatch(
        fetchRepos('https://api.github.com/search/repositories?q=stars:>0'),
      )
      .then(() => {
        const newState = store.getState();

        expect(newState.repositories.repos).toEqual(expectedState);
      });
  });

  it('store appends to Repo on loadingMore', () => {
    const oldRepo = {
      id: 3,
      stargazers_count: 1,
      name: '',
      avatar_url: '',
      description: '',
      stared: false,
      forks_count: 0,
      watchers_count: 0,
    };
    const expectedState = [
      oldRepo,
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
    ];
    const initState = {
      ...initialState,
      repositories: {
        ...initialState.repositories,
        repos: [oldRepo],
      },
    };
    const store = testStore(initState);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          items: response,
        },
        headers: {
          link: '',
        },
      });
    });
    return store
      .dispatch(
        loadMore('https://api.github.com/search/repositories?q=stars:>0'),
      )
      .then(() => {
        const newState = store.getState();

        expect(newState.repositories.repos).toEqual(expectedState);
      });
  });
});
