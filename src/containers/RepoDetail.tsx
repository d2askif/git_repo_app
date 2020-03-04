/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from '../navigation';
import Avatar from '../components/profile/avatar';
import SmallCard from '../components/common/SmallCard';
import {truncateNumber} from '../utils/TruncateNumber';
import {Button} from 'react-native-elements';
import Share from 'react-native-share';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    position: 'absolute',
    top: 100,
    left: 32,
    right: 32,
    bottom: 84,
    backgroundColor: 'white',
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  avatar_container: {
    marginTop: -76,
    width: 160,
    height: 160,
    alignSelf: 'center',
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,

    elevation: 2,
  },
  rounded_corner: {
    marginTop: -160,
    marginLeft: -40,
    backgroundColor: '#CDE1F6',
    height: 240,
    width: 240,
    borderRadius: 90,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    paddingBottom: 16,
  },
  name_container: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontWeight: '300',
    fontSize: 24,
    color: '#999BB1',
    opacity: 1,
    marginBottom: 16,
  },
  description_container: {
    paddingHorizontal: 32,
    marginVertical: 16,
  },
  description_header: {fontSize: 14, marginBottom: 8, color: '#6D7195'},
  description: {
    fontWeight: '300',
    fontSize: 14,
    color: '#999BB1',
    textAlign: 'justify',
  },
});

type RepoDetailScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Detail'
>;
type RepoDetailScreenRouteProp = RouteProp<StackParamList, 'Detail'>;

interface Props {
  navigation: RepoDetailScreenNavigationProp;
  route: RepoDetailScreenRouteProp;
}

export default class RepoDetail extends Component<Props> {
  ShareMessage = () => {
    const {repo} = this.props.route.params;

    const shareOptions = {
      title: repo.html_url,
      failOnCancel: false,
      message: repo.html_url,
    };
    Share.open(shareOptions);
  };
  render() {
    const {repo} = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{backgroundColor: '#CDE1F6', height: 200}} />
        <View style={styles.rounded_corner} />
        <View style={styles.card}>
          <View style={styles.avatar_container}>
            <Avatar
              style={styles.avatar}
              image_url={{uri: repo.avatar_url}}
              size="xlarge"
              name={'daniel'}
            />
          </View>
          <View style={styles.name_container}>
            <Text style={styles.name}>{repo.name}</Text>
            <View style={styles.statistics}>
              <SmallCard
                icon="code-fork"
                title={truncateNumber(repo.forks_count).toString()}
                label="Fork"
              />
              <SmallCard
                icon="eye"
                title={truncateNumber(repo.watchers_count).toString()}
                label="Watch"
              />
              <SmallCard
                icon="star"
                title={truncateNumber(repo.stargazers_count).toString()}
                label="Star"
              />
            </View>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_header}>Description</Text>
            <Text style={styles.description}>{repo.description}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              paddingBottom: 32,
            }}>
            <Button
              testID="share"
              onPress={this.ShareMessage}
              title="Share repo"
              buttonStyle={{
                backgroundColor: '#2FA6F2',
                borderRadius: 32,
                width: 200,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
