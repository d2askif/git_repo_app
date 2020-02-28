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
};

export type State = {
  repos: Array<Repo>;
  app: App;
};
