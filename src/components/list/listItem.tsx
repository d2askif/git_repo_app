/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Avatar from '../profile/avatar';
import {Icon} from 'react-native-elements';
import {truncateNumber} from '../../utils/TruncateNumber';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
  },
  avatar_name: {
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    justifyContent: 'flex-start',
    marginRight: 8,
  },
  name_description: {
    width: screenWidth * 0.58,
    flexDirection: 'column',
    paddingLeft: 8,
  },
  name_text: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 8,
    color: 'grey',
  },
  description_text: {
    fontSize: 14,
    color: '#ACACC1',
    letterSpacing: 1.0,
    textAlign: 'left',
  },
  star: {
    paddingTop: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  onStarPressed: () => void;
  avatar_url: string;
  name: string;
  description: String;
  stargazers_count: number;
  isStared: boolean;
  onPress: () => void;
  testID: string;
}

const listItem = ({
  isStared,
  name,
  avatar_url,
  description,
  stargazers_count,
  onStarPressed,
  onPress,
  testID,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} testID={testID}>
      <View style={styles.container}>
        <View style={styles.avatar_name}>
          <View style={styles.avatar}>
            <Avatar size="large" name={name} image_url={{uri: avatar_url}} />
          </View>
          <View style={styles.name_description}>
            <View>
              <Text style={styles.name_text}>{name}</Text>
            </View>
            <View>
              <Text numberOfLines={3} style={styles.description_text}>
                {description}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.star}>
          <Icon
            name="star"
            color={isStared ? 'black' : 'lightgrey'}
            size={20}
            type="font-awesome"
            onPress={onStarPressed}
          />
          <Text> {truncateNumber(stargazers_count)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default listItem;
