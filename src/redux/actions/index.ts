import Axios from 'axios';
import {types} from './types';
import {Repo} from '../store/types';

export const fetchRepos = () => async (dispatch: Function) => {
  dispatch({
    type: types.APP_LOADING,
    payload: true,
  });
  await Axios.get('https://api.github.com/search/repositories?q=stars:>0').then(
    res => {
      console.log(res);
      const repos: Repo = res.data.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        stargazers_count: item.stargazers_count,
        avatar_url: item.owner.avatar_url,
        stared: false,
      }));
      dispatch({
        type: types.APP_LOADING,
        payload: false,
      });
      dispatch({
        type: types.GET_REPOS,
        payload: repos,
      });
    },
  );
};

export const starRepo = (id: number) => (dispatch: Function) => {
  dispatch({
    type: types.STAR_REPO,
    payload: id,
  });
};
