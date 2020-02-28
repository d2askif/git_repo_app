export type Repo = {
  id: number;
  name: string;
  avatar_url: string;
  description: string;
  stargazers_count: number;
  stared: boolean;
};

export type State = {
  repos: Array<Repo>;
};
