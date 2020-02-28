import {types} from '../../actions/types';
import {Repo, Repository} from '../../store/types';

const initialState = {
  repos: [],
  nextPage: '',
  url: 'https://api.github.com/search/repositories?q=stars:>0',
};
export default (state: Repository = initialState, action: any) => {
  switch (action.type) {
    case types.GET_REPOS:
      return {
        ...state,
        repos: [...action.payload.repos],
        nextPage: action.payload.nextPageUrl,
      };
    case types.GET_MORE_REPOS:
      return {
        ...state,
        repos: [...state.repos, ...action.payload.repos],
        nextPage: action.payload.nextPageUrl,
      };
    case types.STAR_REPO:
      const newRepo = state.repos.map((repo: Repo) => {
        if (repo.id === action.payload) {
          repo.stared = !repo.stared;
          repo.stargazers_count = repo.stared
            ? repo.stargazers_count + 1
            : repo.stargazers_count - 1;
        }
        return repo;
      });
      return {...state, repos: newRepo};
    default:
      return state;
  }
};
