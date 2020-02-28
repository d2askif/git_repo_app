import Axios from 'axios';
import {types} from './types';
import {Repo} from '../store/types';

function getNextPageUrl(links: string) {
  const link = links.split(',').find(lnk => lnk.includes('next')) || '';
  const nextLink = link.split(';')[0];
  const nextPageUrl = nextLink
    .replace('<', '')
    .replace('>', '')
    .trim();
  return nextPageUrl;
}

export const fetchRepos = (url: string) => async (dispatch: Function) => {
  dispatch({
    type: types.APP_LOADING,
    payload: true,
  });
  await Axios.get(url).then(res => {
    console.log(res);

    const repos: Repo = res.data.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      stargazers_count: item.stargazers_count,
      avatar_url: item.owner.avatar_url,
      stared: false,
    }));
    const nextPageUrl = getNextPageUrl(res.headers.link);
    console.log({nextPageUrl});

    dispatch({
      type: types.APP_LOADING,
      payload: false,
    });
    dispatch({
      type: types.GET_REPOS,
      payload: {repos, nextPageUrl},
    });
  });
};

export const loadMore = (url: string) => async (dispatch: Function) => {
  dispatch({
    type: types.APP_LOADING_MORE,
    payload: true,
  });
  await Axios.get(url).then(res => {
    console.log(res);

    const repos: Repo = res.data.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      stargazers_count: item.stargazers_count,
      avatar_url: item.owner.avatar_url,
      stared: false,
    }));
    const nextPageUrl = getNextPageUrl(res.headers.link);
    console.log({nextPageUrl});

    dispatch({
      type: types.APP_LOADING_MORE,
      payload: false,
    });
    dispatch({
      type: types.GET_MORE_REPOS,
      payload: {repos, nextPageUrl},
    });
  });
};

export const starRepo = (id: number) => (dispatch: Function) => {
  dispatch({
    type: types.STAR_REPO,
    payload: id,
  });
};
