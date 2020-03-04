import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {fetchRepos, starRepo, loadMore} from '../redux/actions';
import List from '../components/list/list';
import ListItem from '../components/list/listItem';
import {State, Repo} from '../redux/store/types';
import ScreenContainer from './common/ScreenContainer';
import Spinner from '../components/common/spinner';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../navigation';
import Error from '../components/common/Error';
import Header from '../components/common/header';

const styles = StyleSheet.create({
  safeAre: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F7FE',
  },
});
type RepoScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

interface Props {
  getRepos: (url: string) => void;
  getMoreRepos: (url: string) => void;
  toggleRepoStar: (id: number) => void;
  repos: Array<Repo>;
  appLoading: boolean;
  appLoadingMore: boolean;
  appError: string;
  url: string;
  nextPageUrl: string;
  navigation: RepoScreenNavigationProp;
}

interface RepoState {
  showOnlyStared: boolean;
  search: string;
}

export class RepoContainer extends Component<Props, RepoState> {
  constructor(props: Props) {
    super(props);
    this.renderRepoItem = this.renderRepoItem.bind(this);
    this.handleStarRepo = this.handleStarRepo.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.renderListFooter = this.renderListFooter.bind(this);
    this.showOnlyStaredRepos = this.showOnlyStaredRepos.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    this.state = {showOnlyStared: false, search: ''};
  }
  componentDidMount() {
    const {url, getRepos} = this.props;

    this.props.navigation.setOptions({
      header: this.renderHeader,
    });

    getRepos(url);
  }

  componentDidUpdate() {
    this.props.navigation.setOptions({
      header: this.renderHeader,
    });
  }

  handelSearch = (text: string) => {
    this.setState({...this.state, search: text});
  };

  handleNavigation(index: number) {
    const {navigation, repos} = this.props;
    navigation.navigate('Detail', {repo: repos[index]});
  }

  showOnlyStaredRepos() {
    const {showOnlyStared} = this.state;
    this.setState({showOnlyStared: !showOnlyStared});
  }

  handleStarRepo(repoId: number) {
    const {toggleRepoStar} = this.props;
    toggleRepoStar(repoId);
  }
  handleLoadMore() {
    const {nextPageUrl, getMoreRepos} = this.props;
    getMoreRepos(nextPageUrl);
  }
  renderHeader = () => {
    const {showOnlyStared} = this.state;
    const {search} = this.state;

    return (
      <Header
        search={search}
        updateSearch={this.handelSearch}
        onFilter={this.showOnlyStaredRepos}
        filterTitle={showOnlyStared ? 'Stared' : 'Filter'}
      />
    );
  };
  renderRepoItem(repo: Repo, index: number) {
    return (
      <ListItem
        testID={'listItem' + index.toString()}
        onPress={() => this.handleNavigation(index)}
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
    const {appLoading, appError, repos} = this.props;
    const {showOnlyStared, search} = this.state;
    let data = (showOnlyStared
      ? repos.filter(repo => repo.stared === true)
      : repos
    ).filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()));

    if (data.length === 0 && !appLoading && !appError) {
      return <Error message="No repos to show !" />;
    }
    return (
      <ScreenContainer
        testId="RepoContainer"
        appLoading={appLoading}
        appError={appError}>
        <View style={styles.container}>
          <List
            refresh={appError !== ''}
            onRefresh={() => this.props.getRepos(this.props.url)}
            loadMore={this.handleLoadMore}
            data={data}
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
