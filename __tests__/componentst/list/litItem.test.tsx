import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import ListItem from '../../../src/components/list/listItem';
test('listItem component', () => {
  const props = {
    onStarPressed: jest.fn(),
    avatar_url: 'url',
    name: 'name',
    description: 'description',
    stargazers_count: 1200,
    isStared: false,
    onPress: jest.fn(),
  };
  const snapshot = renderer.create(<ListItem {...props} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
