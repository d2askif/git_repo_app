import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {fetchRepos, starRepo, loadMore} from '../redux/actions';
import List from '../components/list/list';
import ListItem from '../components/list/listItem';
import {State, Repo} from '../redux/store/types';
import ScreenContainer from './common/ScreenContainer';
import Spinner from '../components/common/spinner';

const styles = StyleSheet.create({
  safeAre: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

interface Props {
  getRepos: (url: string) => void;
  getMoreRepos: (url: string) => void;
  toggleRepoStar: (id: number) => void;
  repos: any;
  appLoading: boolean;
  appLoadingMore: boolean;
  appError: string;
  url: string;
  nextPageUrl: string;
}

export class RepoContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.renderRepoItem = this.renderRepoItem.bind(this);
    this.handleStarRepo = this.handleStarRepo.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.renderListFooter = this.renderListFooter.bind(this);
  }
  componentDidMount() {
    const {url, getRepos} = this.props;
    getRepos(url);
  }

  handleStarRepo(repoId: number) {
    const {toggleRepoStar} = this.props;
    toggleRepoStar(repoId);
  }
  handleLoadMore() {
    const {nextPageUrl, getMoreRepos} = this.props;
    console.log({getMoreRepos});

    getMoreRepos(nextPageUrl);
  }

  renderRepoItem(repo: Repo, index: number) {
    return (
      <ListItem
        key={index.toString()}
        isStared={repo.stared}
        onStarPressed={() => this.handleStarRepo(repo.id)}
        name={repo.name}
        stargazers_count={repo.stargazers_count}
        avatar_url={repo.avatar_url}
        description={repo.description}
      />
    );
  }
  renderListFooter() {
    const {appLoadingMore} = this.props;
    return appLoadingMore ? <Spinner /> : null;
  }

  render() {
    const {appLoading, appError} = this.props;
    return (
      <ScreenContainer appLoading={appLoading} appError={appError}>
        <View style={styles.container}>
          <List
            loadMore={this.handleLoadMore}
            data={this.props.repos}
            renderItem={this.renderRepoItem}
            ListFooterComponent={this.renderListFooter}
          />
        </View>
      </ScreenContainer>
    );
  }
}

const mapStateToProps = (state: State) => ({
  repos: state.repositories.repos,
  url: state.repositories.url,
  nextPageUrl: state.repositories.nextPage,
  appLoading: state.app.loading,
  appLoadingMore: state.app.loadingMore,
  appError: state.app.error,
});

const mapDispatchToProps = {
  getRepos: fetchRepos,
  toggleRepoStar: starRepo,
  getMoreRepos: loadMore,
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer);
