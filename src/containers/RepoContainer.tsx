import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {fetchRepos, starRepo} from '../redux/actions';
import List from '../components/list/list';
import ListItem from '../components/list/listItem';
import {State, Repo} from '../redux/store/types';

const styles = StyleSheet.create({
  safeAre: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

interface Props {
  fetchRepos: () => void;
  toggleRepoStar: (id: number) => void;
  repos: any;
}

export class RepoContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.handleStarRepo = this.handleStarRepo.bind(this);
  }
  componentDidMount() {
    this.props.fetchRepos();
  }
  handleStarRepo(repoId: number) {
    const {toggleRepoStar} = this.props;
    toggleRepoStar(repoId);
  }

  renderItem(repo: Repo, index: number) {
    console.log('item', repo, 'index', index);
    return (
      <ListItem
        isStared={repo.stared}
        onStarPressed={() => this.handleStarRepo(repo.id)}
        name={repo.name}
        stargazers_count={repo.stargazers_count}
        avatar_url={repo.avatar_url}
        description={repo.description}
      />
    );
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={styles.safeAre}>
        <View style={styles.container}>
          <Text>Test</Text>
          <List data={this.props.repos} renderItem={this.renderItem} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: State) => ({
  repos: state.repos,
});

const mapDispatchToProps = {
  fetchRepos,
  toggleRepoStar: starRepo,
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer);
