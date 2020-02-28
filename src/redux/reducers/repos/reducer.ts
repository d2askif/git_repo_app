import {types} from '../../actions/types';
import {Repo} from '../../store/types';

export default (state: any = [], action: any) => {
  switch (action.type) {
    case types.GET_REPOS:
      return [...state, ...action.payload];
    case types.STAR_REPO:
      const newState = state.map((repo: Repo) => {
        if (repo.id === action.payload) {
          repo.stared = !repo.stared;
          repo.stargazers_count = repo.stared
            ? repo.stargazers_count + 1
            : repo.stargazers_count - 1;
        }

        return repo;
      });
      return newState;
    default:
      return state;
  }
};
