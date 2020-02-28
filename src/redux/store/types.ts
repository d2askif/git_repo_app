export type Repo = {
  id: number;
  name: string;
  avatar_url: string;
  description: string;
  stargazers_count: number;
  stared: boolean;
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
