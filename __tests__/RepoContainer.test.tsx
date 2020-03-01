import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import RepoContainer from '../src/containers/RepoDetail';
test('RepoContainer snapshot', () => {
  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn(),
    },
    ...props,
  });
  const navigation = createTestProps({});
  const snapshot = renderer.create(
    <RepoContainer route={{params: {repo: {}}}} navigation={navigation} />,
  );
  expect(snapshot).toMatchSnapshot();
});
