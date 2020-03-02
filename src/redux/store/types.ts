export type Repo = {
  id: number;
  name: string;
  avatar_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  stared: boolean;
  html_url: string;
};

export type App = {
  loading: boolean;
  error: string;
  loadingMore: boolean;
};
export type Repository = {
  repos: Array<Repo>;
  nextPage: string;
  url: string;
};

export type State = {
  repositories: Repository;
  app: App;
};

export const initialState: State = {
  app: {
    loading: false,
    error: '',
    loadingMore: false,
  },
  repositories: {
    repos: [],
    nextPage: '',
    url: 'https://api.github.com/search/repositories?q=stars:>0',
  },
};
